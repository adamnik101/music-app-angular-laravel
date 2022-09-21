import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IArtist} from "../interfaces/i-artist";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {serverPath} from "../../constants/server";
import {api} from "../../constants/api";
import {IArtistDetail} from "../interfaces/i-artist-detail";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artistsApi: string = api.artists
  private latest6Api: string = api.latest6Artists
  constructor(private http: HttpClient) { }

  getAll(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(serverPath + this.artistsApi)
  }
  getAllAdmin() {
    return this.http.get<IArtist[]>(serverPath + this.artistsApi + '/all')
  }
  getLatest6() : Observable<IArtist[]> {
    return this.http.get<IArtist[]>(serverPath + this.latest6Api)
  }
  getOne(id: number) {
    return this.http.get<IArtistDetail>(serverPath + this.artistsApi + '/'+ id)
  }
  deleteArtist(artist: IArtist) {
    return this.http.delete(serverPath + api.artists +'/delete/' + artist.id)
  }
  addArtist(name: string, image: File) {
    var data = new FormData()
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    headers.append('Accept', 'application/json')
    data.append('name', name)
    data.append('image', image)
    return this.http.post(serverPath + api.artists + '/add',data, {headers})
  }
  editArtist(name: string, image: File, id: number) {
    var data = new FormData()
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    headers.append('Accept', 'application/json')
    data.append('name', name)
    data.append('image', image)
    data.append('id', String(id))
    return this.http.post(serverPath + api.artists + '/edit',data, {headers})
  }
}
