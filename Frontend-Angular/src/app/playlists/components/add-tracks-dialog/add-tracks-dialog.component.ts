import {Component, Inject, OnInit} from '@angular/core';
import {ITrack} from "../../../tracks/interfaces/i-track";
import {TracksService} from "../../../tracks/services/tracks.service";
import {IPlaylist} from "../../interfaces/i-playlist";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlaylistService} from "../../services/playlist.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";

@Component({
  selector: 'app-add-tracks-dialog',
  templateUrl: './add-tracks-dialog.component.html',
  styleUrls: ['./add-tracks-dialog.component.scss']
})
export class AddTracksDialogComponent implements OnInit {
  tracks : ITrack[] = []
  artists: IArtist[] = []
  selectedTracks: ITrack[] = []
  searchBy: string = ''
  constructor(public dialogRef: MatDialogRef<AddTracksDialogComponent>, private snack: MatSnackBar ,private artistsService: ArtistsService,private trackService: TracksService, @Inject(MAT_DIALOG_DATA) public playlist: IPlaylist, private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }
  search() {
    this.artistsService.getAllAdmin().subscribe(artists => this.artists = artists)
    console.log(this.selectedTracks)
    console.log()
    if(this.searchBy.length){
      this.trackService.getByName(this.searchBy).subscribe(tracks => {
        this.tracks = tracks
      })
    }
  }
  addToPlaylist(track: ITrack) {
    this.playlistService.addTrackToPlaylist(track,this.playlist).subscribe(response => {
      if(response) {
        this.playlistService.getOnePlaylist(this.playlist.id).subscribe(playlist => {
          this.dialogRef.close(true);
        })
        this.snack.open('You have successfully added a track to this playlist!', '', {
          verticalPosition: 'top',
          horizontalPosition: "center",
          duration: 3000
        })
      }
    })
  }
}
