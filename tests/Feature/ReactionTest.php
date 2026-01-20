<?php

use App\Models\Reaction;
use App\Models\User;

test('authenticated users can add a reaction', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->postJson('/reactions', [
        'emoji' => '👍',
    ]);

    $response->assertSuccessful();
    $response->assertJson(['success' => true]);

    expect(Reaction::count())->toBe(1);

    $reaction = Reaction::first();
    expect($reaction->emoji)->toBe('👍');
    expect($reaction->user_id)->toBe($user->id);
});

test('users can add multiple reactions with the same emoji', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->postJson('/reactions', ['emoji' => '❤️']);
    $this->actingAs($user)->postJson('/reactions', ['emoji' => '❤️']);
    $this->actingAs($user)->postJson('/reactions', ['emoji' => '❤️']);

    expect(Reaction::count())->toBe(3);
    expect(Reaction::where('emoji', '❤️')->count())->toBe(3);
});

test('users can add reactions with different emojis', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->postJson('/reactions', ['emoji' => '👍']);
    $this->actingAs($user)->postJson('/reactions', ['emoji' => '❤️']);
    $this->actingAs($user)->postJson('/reactions', ['emoji' => '🎉']);

    expect(Reaction::count())->toBe(3);
    expect(Reaction::where('user_id', $user->id)->count())->toBe(3);
});

test('reaction requires valid emoji', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->postJson('/reactions', [
        'emoji' => '😀',
    ]);

    $response->assertUnprocessable();
    expect(Reaction::count())->toBe(0);
});

test('reaction requires emoji field', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->postJson('/reactions', []);

    $response->assertUnprocessable();
    expect(Reaction::count())->toBe(0);
});

test('guests cannot add reactions', function () {
    $response = $this->postJson('/reactions', [
        'emoji' => '👍',
    ]);

    $response->assertUnauthorized();
    expect(Reaction::count())->toBe(0);
});

test('dashboard displays reaction counts', function () {
    $user = User::factory()->create();

    Reaction::factory()->create(['emoji' => '👍']);
    Reaction::factory()->create(['emoji' => '👍']);
    Reaction::factory()->create(['emoji' => '❤️']);
    Reaction::factory()->create(['emoji' => '🎉']);
    Reaction::factory()->create(['emoji' => '🎉']);
    Reaction::factory()->create(['emoji' => '🎉']);

    $response = $this->actingAs($user)->get('/dashboard');

    $response->assertOk();
    $reactionCounts = $response->viewData('page')['props']['reactionCounts'];

    expect($reactionCounts['👍'])->toBe(2);
    expect($reactionCounts['❤️'])->toBe(1);
    expect($reactionCounts['🎉'])->toBe(3);
});
