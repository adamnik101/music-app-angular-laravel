import { Injectable } from '@angular/core';
import {ITrack} from "../../tracks/interfaces/i-track";
import {HttpClient} from "@angular/common/http";
import {serverPath} from "../../constants/server";
import {api} from "../../constants/api";

@Injectable({
  providedIn: 'root'
})
export class PlayedService {
  track! : ITrack
  timesPlayed! : number
  constructor(private http: HttpClient) { }

  played(track : ITrack) {
    const id = track.id
    console.log('id', id)
    return this.http.post(serverPath + api.tracks + '/played', {'id' : id})
  }
}
