<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    use HasFactory;
    protected $table = 'tracks';
    public function artists(){
        return $this->belongsToMany(Artist::class, 'track_artist', 'track_id', 'artist_id')->withPivot('artist_owner');
    }
}
