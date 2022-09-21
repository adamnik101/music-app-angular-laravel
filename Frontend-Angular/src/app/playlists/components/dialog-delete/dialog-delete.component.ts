import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPlaylist} from "../../interfaces/i-playlist";
import {PlaylistService} from "../../services/playlist.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../shared/services/snackbar.service";

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialog: MatDialogRef<DialogDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data : IPlaylist,
              private playlistService: PlaylistService,
              private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }
  cancel() : void{
    this.dialog.close()
  }

  delete(playlist: IPlaylist) : void {
      this.playlistService.delete(playlist).subscribe(response => {
        if(response == true) {
          this.snackBar.showSnackbar('You have successfully deleted a playlist!')
          this.dialog.close()
        }
        else{
          console.log(response)
        }
      })
    }
}
