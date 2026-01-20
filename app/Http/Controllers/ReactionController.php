<?php

namespace App\Http\Controllers;

use App\Models\Reaction;
use Illuminate\Http\Request;

class ReactionController extends Controller
{
    /**
     * Store a new reaction for the authenticated user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'emoji' => ['required', 'string', 'in:👍,❤️,🎉,🔥'],
        ]);

        Reaction::create([
            'emoji' => $validated['emoji'],
            'user_id' => $request->user()->id,
        ]);

        return response()->json(['success' => true]);
    }
}
