import { Pipe, PipeTransform } from '@angular/core';
import {IArtist} from "../artists/interfaces/i-artist";
import {ITrack} from "../tracks/interfaces/i-track";

@Pipe({
  name: 'owner'
})
export class OwnerPipe implements PipeTransform {
  artists: IArtist[] = []

  transform(track: ITrack) {
    let artistToReturn
    this.artists = track.artists
    this.artists.forEach(artist => {
      if(artist.pivot.artist_owner){
        artistToReturn = artist.artist
      }
    })
    return artistToReturn
  }
}
