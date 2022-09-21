<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlaylistRequest;
use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlaylistController extends Controller
{
    public function getAll() {
        return Playlist::with("tracks.artists")->with('user')->whereHas('user', function ($query) {
            $query->where('role_id', '=', 1);
        })->inRandomOrder()->limit(6)->get();
    }
    public function getOne($id) {
        return Playlist::with('tracks.artists')->with('user')->where("id", '=', $id)->first();
    }
    public function getUserPlaylists($id) {
        return Playlist::with('tracks.artists')->with('user')->where('user_id', '=', $id)->get();
    }
    public function add(PlaylistRequest $request) {
        if($request->validated()){
            $image = $request->file('cover');
            if(is_null($image)) {
                if (!is_null($request->name)) {
                    $playlist = Playlist::create([
                        'name' => $request->name,
                        'user_id' => $request->user
                    ]);
                    return $playlist;
                }
            }

            $imageName = time(). '_' . $request->file('cover')->getClientOriginalName();

            $result = $image->move('../../Frontend-Angular/src/assets/images/playlists/', $imageName);

            if($result){
                $playlist = Playlist::create([
                   'name' => $request->name,
                    'cover' => $imageName,
                    'user_id' => $request->user
                ]);
                return $playlist;
            }
            return false;
        }
    }

    public function addTrackToPlaylist(Request $request) {
        $trackId = $request->track['id'];
        $playlistId = $request->playlist['id'];
        if($trackId && $playlistId) {
            $id = DB::table('playlist_track')->insertGetId([
                'track_id' => $trackId,
                'playlist_id' => $playlistId
            ]);
            if($id) {
                http_response_code('204');
                return true;
            }
            return false;
        }
        return false;
    }
    public function delete(Request $request) {
        try{
            DB::beginTransaction();
            $playlist = Playlist::find($request->id);
            if($playlist) {
                DB::delete('delete from playlist_track where playlist_id = '.$playlist->id);

                $playlist->delete();
                DB::commit();
                return true;
            }
            return false;
        }
        catch (\Throwable $exception) {
            return $exception->getMessage();
        }
    }
    public function editName(Request $request) {
        $playlist = Playlist::find($request->id);
        $playlist->name = $request->name;
        $playlist->save();
        return Playlist::with('tracks.artists')->with('user')->find($request->id);
    }
    public function deleteTrackPlaylist(Request $request) {
        $trackId = $request->track;
        $playlistId = $request->playlist;
        if($trackId && $playlistId) {
            $id = DB::table('playlist_track')->where('playlist_id', '=', $playlistId)->where('track_id', '=', $trackId)->delete();
            if($id) {
                return Playlist::with('tracks.artists')->with('user')->find($playlistId);
            }
            return false;
        }
        return false;
    }
}
