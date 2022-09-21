import { Pipe, PipeTransform } from '@angular/core';
import {IArtist} from "../artists/interfaces/i-artist";
import {ITrack} from "../tracks/interfaces/i-track";

@Pipe({
  name: 'artist'
})
export class ArtistPipe implements PipeTransform {

  transform(artists: IArtist[], track: ITrack, owners: IArtist[]){
    console.log(track)
    if(artists.length <= 1) {
      return ''
    }
    return track.artists.filter((artist) => {
      owners.forEach(owner => {
        return artist.id != owner.id
      })
    }).map((artist: IArtist, index) => {
      owners.forEach(owner => {
        let o
        if(artist.id == owner.id){
          o = ''
        }
        return o
      })
      return artist.artist
    }).join(' x ')
  }

}
