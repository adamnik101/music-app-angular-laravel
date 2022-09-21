import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {TracksService} from "../../../tracks/services/tracks.service";
import {ArtistsService} from "../../../artists/services/artists.service";
import {IArtist} from "../../../artists/interfaces/i-artist";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title: string = ''
  tracks: ITrack[] = []
  artists: IArtist[] = []
  constructor(private authService: AuthService,
              private tracksService: TracksService,
              private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.title = 'Welcome, ' + this.authService.user.name.split(" ")[0] + '!'
    this.tracksService.getAll().subscribe(tracks => this.tracks = tracks)
    this.artistsService.getAll().subscribe(artists => this.artists = artists)
  }

}
