import {ITrack} from "../../tracks/interfaces/i-track";
import {IUser} from "../../auth/interfaces/i-user";

export interface IPlaylist {
  id: number
  name: string
  cover: string
  tracks: ITrack[]
  user: IUser
}
