<?php

use App\Models\PageView;
use App\Models\User;

test('page views are tracked for GET requests', function () {
    $this->get('/');

    expect(PageView::count())->toBe(1);

    $pageView = PageView::first();
    expect($pageView->url)->toContain('/');
    expect($pageView->ip_address)->not->toBeNull();
    expect($pageView->user_id)->toBeNull();
});

test('page views are tracked for authenticated users', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->get('/dashboard');

    expect(PageView::count())->toBe(1);

    $pageView = PageView::first();
    expect($pageView->url)->toContain('/dashboard');
    expect($pageView->user_id)->toBe($user->id);
});

test('page views are not tracked for POST requests', function () {
    $this->post('/login', [
        'email' => 'test@example.com',
        'password' => 'password',
    ]);

    expect(PageView::count())->toBe(0);
});

test('dashboard displays total page views and unique visitors', function () {
    $user = User::factory()->create();
    $otherUser = User::factory()->create();

    // 2 views from user
    PageView::factory()->create(['user_id' => $user->id]);
    PageView::factory()->create(['user_id' => $user->id]);

    // 1 view from other user
    PageView::factory()->create(['user_id' => $otherUser->id]);

    // 3 views from 2 different guest IPs
    PageView::factory()->create(['ip_address' => '192.168.1.1', 'user_id' => null]);
    PageView::factory()->create(['ip_address' => '192.168.1.1', 'user_id' => null]);
    PageView::factory()->create(['ip_address' => '192.168.1.2', 'user_id' => null]);

    $response = $this->actingAs($user)->get('/dashboard');

    $response->assertOk();
    expect($response->viewData('page')['props']['totalPageViews'])->toBe(7); // 6 created + 1 from the GET request
    expect($response->viewData('page')['props']['uniqueVisitors'])->toBe(4); // 2 authenticated users + 2 distinct guest IPs
});

test('multiple page views are counted correctly', function () {
    $this->get('/');
    $this->get('/');
    $this->get('/');

    expect(PageView::count())->toBe(3);
});
