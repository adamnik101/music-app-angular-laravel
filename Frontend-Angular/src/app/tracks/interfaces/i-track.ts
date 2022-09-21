import {IArtist} from "../../artists/interfaces/i-artist";

export interface ITrack {
  id: number
  name: string
  src: string
  owner: string
  explicit: boolean
  plays: number
  artists: IArtist[]
}
