<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\TrackController;
use App\Http\Controllers\ArtistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS, PUT, PATCH");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");
    Route::get('/tracks/most-played', [TrackController::class, 'mostPlayed']);
    Route::get('/tracks', [TrackController::class, 'getAll']);
    Route::get('/tracks/{id}', [TrackController::class, 'getOne']);
    Route::get('/tracks/search/{name}', [TrackController::class, 'getTrackByString']);
    Route::delete('/tracks/delete/{id}', [TrackController::class, 'deleteTrack']);
    Route::post('/tracks/played', [TrackController::class, 'played']);
    Route::post('/tracks/add', [TrackController::class, 'add']);
    Route::post('/tracks/edit', [TrackController::class, 'edit']);
    Route::get('/artists', [ArtistController::class, 'getAll']);
    Route::get('/artists/all', [ArtistController::class, 'getAllAdmin']);
    Route::get('/artists/latest6', [ArtistController::class, 'getLatestSix']);
    Route::get('/artists/{id}', [ArtistController::class, 'getOne']);
    Route::post('/artists/add', [ArtistController::class, 'add']);
    Route::post('/artists/edit', [ArtistController::class, 'edit']);
    Route::delete('/artists/delete/{id}', [ArtistController::class, 'delete']);
    Route::get('/playlists', [PlaylistController::class, 'getAll']);
    Route::get('/playlists/{id}', [PlaylistController::class, 'getOne']);
    Route::get('/playlists/user/{id}', [PlaylistController::class, 'getUserPlaylists']);
    Route::post('/playlists/add', [PlaylistController::class, 'add']);
    Route::post('/playlists/track/add', [PlaylistController::class, 'addTrackToPlaylist']);
    Route::delete('/playlists/delete/{id}', [PlaylistController::class, 'delete']);
    Route::delete('/playlists/{playlist}/track/delete/{track}', [PlaylistController::class, 'deleteTrackPlaylist']);
    Route::post('/playlist/edit', [PlaylistController::class, 'editName']);
    Route::post('/auth/login', [AuthController::class, 'login']);

