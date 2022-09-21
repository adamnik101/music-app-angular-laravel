import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";
import {PlaylistService} from "../../../playlists/services/playlist.service";
import {IPlaylist} from "../../../playlists/interfaces/i-playlist";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {TracksService} from "../../../tracks/services/tracks.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title : string[] = ["Discover new music every day", "Listen to your favorite artists!", "Top trending songs"]
  subtitle: string[] = ["Start listening to the best new releases now", "Discover and stream a constantly expanding mix of music from the best artists around the world", "Start listening to the most popular songs"]
  playlists: IPlaylist[] = []
  artists: IArtist[] = []
  tracks: ITrack[] = []
  constructor(private playlistService: PlaylistService, private artistService: ArtistsService,
              private trackService: TracksService) { }

  ngOnInit(): void {
    this.playlistService.getAll().subscribe(playlists => this.playlists = playlists)
    this.artistService.getLatest6().subscribe(artists => this.artists = artists )
    this.trackService.getMostPlayed().subscribe(tracks => this.tracks = tracks)
  }

}
