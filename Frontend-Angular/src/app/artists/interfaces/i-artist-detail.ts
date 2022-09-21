import {IArtist} from "./i-artist";
import {ITrack} from "../../tracks/interfaces/i-track";

export interface IArtistDetail {
  artist : IArtist
  tracks : ITrack[]
  features: IArtist[]
}
