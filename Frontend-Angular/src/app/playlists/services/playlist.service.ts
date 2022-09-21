import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlaylist} from "../interfaces/i-playlist";
import {serverPath} from "../../constants/server";
import {api} from "../../constants/api";
import {AuthService} from "../../auth/services/auth.service";
import {ITrack} from "../../tracks/interfaces/i-track";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<IPlaylist[]> {
    return this.http.get<IPlaylist[]>(serverPath + api.playlists)
  }
  getOnePlaylist(id: number) {
      return this.http.get<IPlaylist>(serverPath + api.playlist + id)
  }
  getUserPlaylists() : Observable<IPlaylist[]> {
    return this.http.get<IPlaylist[]>(serverPath + api.userPlaylists + this.authService.userId)
  }
  addUserPlaylist(name: string, image: File, userId: number) {
    let data : FormData = new FormData()
    data.append('name', name)
    data.append('cover', image)
    data.append('user', String(userId))

    return this.http.post(serverPath + api.addPlaylist, data)
  }
  addTrackToPlaylist(track: ITrack, playlist: IPlaylist) {
    return this.http.post(serverPath + api.addTrackToPlaylist, {track, playlist})
  }
  delete(playlist: IPlaylist) {
     return this.http.delete(serverPath + api.deletePlaylist + playlist.id)
  }
  editPlaylistName(id: number, name: string) : Observable<IPlaylist> {
    console.log(id, name)
    return this.http.post<IPlaylist>(serverPath + api.editPlaylistName, {id, name})
  }
  deleteTrackFromPlaylist(track: ITrack, playlist: IPlaylist) {
    return this.http.delete(serverPath + 'playlists/' + playlist.id + '/track/delete/' + track.id)
  }
}
