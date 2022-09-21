<?php

namespace App\Http\Controllers;

use App\Models\artist;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArtistController extends Controller
{
    public function getAll() {
        return Artist::with('tracks')->whereHas('tracks', function ($query){
            $query->where('track_artist.artist_owner', '=', 1);
        })->orderBy('created_at', 'desc')->get();
    }
    public function getAllAdmin () {
        return Artist::with('tracks')->orderBy('created_at', 'desc')->get();
    }
    public function getLatestSix() {
        return Artist::with('tracks')->whereHas('tracks', function ($query){
            $query->where('track_artist.artist_owner', '=', 1);
        })->orderBy('created_at', 'desc')->limit(6)->get();
    }
    public function getOne($id) {
        $artists = Artist::get();
        $artist = Artist::find($id);
        $owner =  Artist::with('tracks')->find($id);
        $tracks = Track::whereHas('artists', function ($query) use ($artist) {
            $query->where('artists.id', $artist->id)
                ->where('track_artist.artist_owner', '=', 1);
            })->with('artists')->get();
        return ['artist' => $owner, 'tracks' => $tracks, 'features' => $artists];
//        $tracks = Track::whereHas('artists', function ($query) use ($artist) {
//            $query->where('artists.id', $artist->id);
//        })->get();
//        $features = Artist::whereHas('tracks', function ($query) use ($tracks) {
//            foreach ($tracks as $track) {
//                $query->where('track_artist.track_id', $track->id)
//                    ->where('track_artist.artist_owner', '=', 0);
//            }
//        })->with('tracks')->get();
//        return ['artist' => $artist, 'tracks' => $tracks, 'features' => $features];
    }
    public function delete($id) {
        $artist = Artist::with('tracks')->find($id);
        if($artist->tracks->count()) {
            return json_encode(['msg' => 'Error: You cannot delete an artist that has tracks!']);
        }
        Artist::destroy($artist->id);
        return json_encode(['msg' => 'You have successfully deleted an artist!']);
    }
    public function add(Request $request) {
        $image = $request->file('image');
        $name = $request->name;
        if(!is_null($image) && !is_null($name)) {
            $imageName = time(). '_' . $image->getClientOriginalName();

            $result = $image->move('../../Frontend-Angular/src/assets/images/artists/', $imageName);
            if($result) {
                Artist::create([
                    'artist' => $name,
                    'cover' => $imageName
                ]);
                return json_encode(['msg' => "You have successfully added new artist"]);
            }
            return json_encode(['msg' => "Error: Image could not be uploaded!"]);

        }
        return json_encode(['msg' => "Error: All fields are required"]);
    }
    public function edit(Request $request) {
        $id = $request->id;
        $name = $request->name;
        $image = $request->file('image');
        $artistExists = Artist::find($id);
        if($artistExists){
            if(!is_null($name)){
                try{
                    $artistExists->artist = $name;
                    if(!is_null($image)){
                        $imageName = time(). '_' . $image->getClientOriginalName();

                        $result = $image->move('../../Frontend-Angular/src/assets/images/artists/', $imageName);
                        if($result) {
                            $artistExists->cover = $imageName;
                        }
                    }
                    $saved = $artistExists->save();
                    if($saved) {
                        return json_encode(['msg' => 'You have successfully updated an artist!']);
                    }
                    return json_encode(['msg' => 'Error: Something went wrong!']);
                }
                catch (\Exception $exception){
                    return $exception->getMessage();
                }
            }
            return json_encode(['msg'=>'Error: Name field is required!']);
        }
        return json_encode(['msg'=>'Fatal error: Artist does not exist!']);
    }
}
