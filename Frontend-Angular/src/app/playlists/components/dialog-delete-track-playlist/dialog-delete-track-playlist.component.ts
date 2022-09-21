import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {PlaylistService} from "../../services/playlist.service";
import {IPlaylist} from "../../interfaces/i-playlist";

@Component({
  selector: 'app-dialog-delete-track-playlist',
  templateUrl: './dialog-delete-track-playlist.component.html',
  styleUrls: ['./dialog-delete-track-playlist.component.scss']
})
export class DialogDeleteTrackPlaylistComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogDeleteTrackPlaylistComponent>, private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }
  delete() :void{
    this.playlistService.deleteTrackFromPlaylist(this.data.track, this.data.playlist).subscribe(response => {
      this.dialogRef.close(response)
    })
  }
  cancel() : void {
    this.dialogRef.close();
  }
}
