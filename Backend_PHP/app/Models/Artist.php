<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;
    protected $table = 'artists';
    protected $fillable = ['artist', 'cover'];
    public function tracks(){
        return $this->belongsToMany(Track::class, 'track_artist', 'artist_id', 'track_id')->withPivot('artist_owner');
    }


}
