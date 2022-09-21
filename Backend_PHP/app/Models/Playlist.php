<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;
    protected $table = 'playlist';
    protected $fillable = [
        'name', 'cover', 'user_id'
    ];
    public function tracks() {
        return $this->belongsToMany(Track::class, 'playlist_track', 'playlist_id', 'track_id');
    }
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
