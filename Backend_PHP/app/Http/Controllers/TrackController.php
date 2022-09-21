<?php

namespace App\Http\Controllers;
use App\Models\Artist;
use App\Models\Track;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrackController extends Controller
{
    public function mostPlayed() {
        return Track::with('artists')->orderBy('plays', 'desc')->take(6)->get();
    }
    public function getAll(){
        return Track::with('artists')->get();
    }
    public function getOne($id) {
        return Track::with('artists')->find($id);
    }

    public function getTrackByString($name) {
        return Track::with('artists')->whereHas('artists', function($query) use ($name) {
            $query->where('artist', 'like', '%'.$name.'%');
        })->orWhere("name", 'LIKE', '%'.$name.'%')->get();
    }
    public function deleteTrack($id) {
        try{
            DB::beginTransaction();
            $track = Track::find($id);
            if($track) {
                DB::delete('delete from playlist_track where track_id = '.$id);
                DB::delete('delete from track_artist where track_id = '.$id);
                $track->delete();
                DB::commit();
                http_response_code(200);
                return json_encode(["msg"=> 'You have successfully deleted a track']);
            }
            http_response_code(204);
            return json_encode(["msg"=> 'Oops, looks like that cannot be done..']);
        }
        catch (\Throwable $exception) {
            return $exception->getMessage();
        }
    }
    public function played(Request $request) {
        $id = $request->id;
        $track = Track::find($id);
        if($track){
            $track->increment('plays');
        }
        return;
    }
    public function add(Request $request) {
        $name = $request->name;
        $owner = $request->owner;
        $features = json_decode($request->features);
        $hasFile = $request->hasFile('track');
        if(!$hasFile){
            return ['msg' => 'Error: You must select a song file first!'];
        }
        if(!$name) {
            return ['msg' => 'Error: You must enter a song title first!'];
        }
        if(!$owner) {
            return ['msg' => 'Error: You must select a song owner first!'];
        }
        try{
            $file = $request->file('track');

            $trackName = time(). '_' . $request->file('track')->getClientOriginalName();

            $result = $file->move('../../Frontend-Angular/src/assets/tracks/', $trackName);
            DB::beginTransaction();
            if($result) {
                $ownerId = Artist::where('artist', '=', $owner)->first();

                if(!$ownerId) {
                    return ['msg' => 'Error: No valid track owner selected!'];
                }
                $id = DB::table('tracks')->insertGetId([
                    'name' => $name,
                    'src' => $trackName
                ]);

                DB::table('track_artist')->insert([
                    'track_id' => $id,
                    'artist_id' => $ownerId->id,
                    'artist_owner' => 1
                ]);
                if($features){
                    foreach ($features as $feature) {
                        DB::table('track_artist')->insert([
                            'track_id' => $id,
                            'artist_id' => $feature,
                            'artist_owner' => 0
                        ]);
                    }
                }

                DB::commit();
                return json_encode(['msg' => "You have successfully added new track"]);
            }
            return json_encode(['msg' => "Error: Image could not be uploaded!"]);
        }
        catch (\Throwable $exception) {
            return ['msg' => $exception->getMessage()];
        }

    }
    public function edit(Request $request) {
        $name = $request->name;
        $owner = $request->owner;
        $id = $request->id;
        $features = json_decode($request->features);
        $hasFile = $request->hasFile('track');
        if(!$name) {
            return ['msg' => 'Error: You must enter a song title first!'];
        }
        if(!$owner) {
            return ['msg' => 'Error: You must select a song owner first!'];
        }
        try{
            DB::beginTransaction();
            $track = Track::find($id);
            $artist = Artist::where('artist', '=', $owner)->first();
                if(!$track) {
                    return ['msg' => 'Error: No valid track selected!'];
                }
                if($hasFile){
                    $file = $request->file('track');

                    $trackName = time(). '_' . $request->file('track')->getClientOriginalName();

                    $result = $file->move('../../Frontend-Angular/src/assets/tracks/', $trackName);
                    if($result) {
                        DB::table('tracks')->where('id', '=', $id)->update([
                            'src' => $trackName
                        ]);
                    }
                }


                DB::table('tracks')->where('id', '=', $id)->update([
                   'name' => $name
                ]);
                DB::table('track_artist')->where('track_id', '=' , $id)->delete();

                DB::table('track_artist')->insert([
                    'track_id' => $id,
                    'artist_id' => $artist->id,
                    'artist_owner' => 1
                ]);
                if($features) {
                    foreach ($features as $feature) {
                        DB::table('track_artist')->insert([
                            'track_id' => $id,
                            'artist_id' => $feature,
                            'artist_owner' => 0
                        ]);
                    }
                }
                DB::commit();
                return json_encode(['msg' => "You have successfully edited the track"]);
        }
        catch (\Throwable $exception) {
            return ['msg' => $exception->getMessage()];
        }

    }
}
