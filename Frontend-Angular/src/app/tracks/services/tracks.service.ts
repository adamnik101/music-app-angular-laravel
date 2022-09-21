import { Injectable } from '@angular/core';
import {serverPath} from "../../constants/server";
import {api} from "../../constants/api";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ITrack} from "../interfaces/i-track";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get<any>(serverPath + api.tracks);
  }
  getByName(name: string) :Observable<ITrack[]>  {
    return this.http.get<ITrack[]>(serverPath + api.searchTracks + name)
  }
  deleteTrack(track: ITrack) {
    return this.http.delete(serverPath + api.tracks + '/delete/' + track.id)
  }
  getMostPlayed() {
    return this.http.get<ITrack[]>(serverPath + api.mostPlayedTracks );
  }
  addTrack(name: string, owner: number, features: number[], track: File) {
    var data = new FormData()
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    headers.append('Accept', 'application/json')
    data.append('name', name)
    data.append('owner', String(owner))
    data.append('features', JSON.stringify(features))
    data.append('track', track)
    return this.http.post(serverPath + api.tracks + '/add', data, {headers})
  }
  editTrack(name: string, owner: number, features: number[], track: File, id: number) {
    var data = new FormData()
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    headers.append('Accept', 'application/json')
    data.append('name', name)
    data.append('owner', String(owner))
    data.append('features', JSON.stringify(features))
    data.append('track', track)
    data.append('id', String(id))
    return this.http.post(serverPath + api.tracks + '/edit', data, {headers})
  }
}
