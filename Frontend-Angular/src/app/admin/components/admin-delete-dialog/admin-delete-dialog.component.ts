import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {TracksService} from "../../../tracks/services/tracks.service";
import {ArtistsService} from "../../../artists/services/artists.service";

@Component({
  selector: 'app-admin-delete-dialog',
  templateUrl: './admin-delete-dialog.component.html',
  styleUrls: ['./admin-delete-dialog.component.scss']
})
export class AdminDeleteDialogComponent implements OnInit {

  track : ITrack = {} as ITrack
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<AdminDeleteDialogComponent>,
              private trackService: TracksService,
              private artistsService: ArtistsService) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  cancel() : void {
    this.dialogRef.close()
  }
  confirm(data : any) {
    if(data.artists) {
      this.trackService.deleteTrack(data).subscribe(response => {
        this.dialogRef.close(response)
      })
      return
    }
    if(data.artist) {
      this.artistsService.deleteArtist(data).subscribe(response => {
        this.dialogRef.close(response)
      })
      return
    }
    return;
  }

}
