import { Pipe, PipeTransform } from '@angular/core';
import {IArtist} from "../artists/interfaces/i-artist";
import {ITrack} from "../tracks/interfaces/i-track";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Pipe({
  name: 'features'
})
export class FeaturesPipe implements PipeTransform {
  artists: IArtist[] = []

  transform(artists: IArtist[], track: ITrack, owners: IArtist[]){
    if(artists.length <= 1) {
      return ''
    }
    let val = track.artists.filter((artist) => {
      if(owners == undefined) {
        return 0  // ne ulazi u map
      }
      return 1 // ulazi u map
    }).map((artist: IArtist, index) => {
      let toReturn : string = ''
      owners.forEach(owner => {
        if(artist.id != owner.id)
          if(!artist.pivot.artist_owner) toReturn =  artist.artist
      })
      return toReturn
    })
    let toReturn = val.toString()
    let firstSection = ''
    let secondSection = ''
    const position = toReturn.indexOf(",")
    if(position != -1) {
      firstSection = toReturn.slice(0, position)
      secondSection = toReturn.slice(position + 1, toReturn.length)
    }
    return (firstSection + secondSection).split(',').join(' x ')
  }
}
