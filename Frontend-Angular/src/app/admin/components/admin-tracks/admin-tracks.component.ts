import { Component, OnInit } from '@angular/core';
import {TracksService} from "../../../tracks/services/tracks.service";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {MatDialog} from "@angular/material/dialog";
import {AdminTrackFormComponent} from "./admin-track-form/admin-track-form.component";
import {SnackbarService} from "../../../shared/services/snackbar.service";
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";

@Component({
  selector: 'app-admin-tracks',
  templateUrl: './admin-tracks.component.html',
  styleUrls: ['./admin-tracks.component.scss']
})
export class AdminTracksComponent implements OnInit {
  tracks: ITrack[] = []
  artists: IArtist[] = [];
  constructor(private trackService: TracksService,
              private dialog: MatDialog,
              private snackBar: SnackbarService,
              private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.trackService.getAll().subscribe(tracks => this.tracks = tracks)
    this.artistsService.getAllAdmin().subscribe(artists => this.artists = artists)
  }
  openAddDialog() {
    this.dialog.open(AdminTrackFormComponent)
      .afterClosed().subscribe(response => {
      if(response){
        this.snackBar.showSnackbar(response.msg)
        this.getAll()
      }
    })
  }
}
