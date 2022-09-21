import {ITrack} from "../../tracks/interfaces/i-track";

export interface IArtist {
  id: number
  artist: string
  cover: string
  tracks: ITrack[]
  pivot: {
    artist_owner : number
  }
}
