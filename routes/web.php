<?php

use App\Http\Controllers\ReactionController;
use App\Models\PageView;
use App\Models\Reaction;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home')->middleware('track.pageviews');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        $authenticatedVisitors = PageView::whereNotNull('user_id')->distinct('user_id')->count('user_id');
        $guestVisitors = PageView::whereNull('user_id')->distinct('ip_address')->count('ip_address');

        $reactionCounts = Reaction::selectRaw('emoji, COUNT(*) as count')
            ->groupBy('emoji')
            ->pluck('count', 'emoji')
            ->toArray();

        return Inertia::render('dashboard', [
            'totalPageViews' => PageView::count(),
            'uniqueVisitors' => $authenticatedVisitors + $guestVisitors,
            'reactionCounts' => $reactionCounts,
        ]);
    })->name('dashboard')->middleware('track.pageviews');

    Route::post('reactions', [ReactionController::class, 'store'])->name('reactions.store');
    Route::get('resume', function () {
        return Inertia::render('resume');
    })->name('resume')->middleware('track.pageviews');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
