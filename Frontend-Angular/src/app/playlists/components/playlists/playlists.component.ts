import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../services/playlist.service";
import {IPlaylist} from "../../interfaces/i-playlist";
import {MatDialog} from "@angular/material/dialog";
import {DialogDeleteComponent} from "../dialog-delete/dialog-delete.component";
import {DialogAddComponent} from "../dialog-add/dialog-add.component";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  title: string = 'Make new playlists containing all of your favorite songs'
  subtitle: string = 'Your playlists can be found here'
  playlists: IPlaylist[] = []
  constructor(private playlistService: PlaylistService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlaylists()
  }
  getPlaylists() {
    this.playlistService.getUserPlaylists().subscribe(response => {
      this.playlists = response
    })
  }
  openDeleteDialog(playlist: IPlaylist) {
    this.dialog.open(DialogDeleteComponent, {
      data: playlist
    })
      .afterClosed().subscribe(() => {
        this.getPlaylists()

    })
  }
  openAddDialog() {
    this.dialog.open(DialogAddComponent)
      .afterClosed().subscribe(() => {
        this.getPlaylists()
    })
  }
}
