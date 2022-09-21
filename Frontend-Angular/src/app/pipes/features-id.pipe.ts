import { Pipe, PipeTransform } from '@angular/core';
import {IArtist} from "../artists/interfaces/i-artist";

@Pipe({
  name: 'featuresId'
})
export class FeaturesIdPipe implements PipeTransform {

  transform(artists : IArtist[]) {
    let artistToReturn: number[] = []
    artists.forEach(artist => {
      if(!artist.pivot.artist_owner){
        artistToReturn.push(artist.id)
      }
    })
    return artistToReturn
  }

}
