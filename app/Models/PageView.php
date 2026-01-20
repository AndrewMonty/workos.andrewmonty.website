<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageView extends Model
{
    /** @use HasFactory<\Database\Factories\PageViewFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'url',
        'ip_address',
        'user_agent',
        'user_id',
    ];

    /**
     * Get the user that owns the page view.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
