import {Component, Input, OnInit} from '@angular/core';
import {IArtist} from "../../../artists/interfaces/i-artist";
import {IPlaylist} from "../../../playlists/interfaces/i-playlist";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditComponent} from "../../../playlists/components/dialog-edit/dialog-edit.component";
import {PlaylistService} from "../../../playlists/services/playlist.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = ''
  @Input() subtitle: string = ''
  @Input() artist!: IArtist
  @Input() playlist: IPlaylist = {} as IPlaylist
  constructor(public dialog: MatDialog, private playlistService: PlaylistService,
              public authService: AuthService) { }

  ngOnInit(): void {
  }
  changePlaylistName(playlist: IPlaylist) {
    this.dialog.open(DialogEditComponent, {
      data: playlist
    }).afterClosed().subscribe(response => {
      if(response?.data?.id) {
        console.log(response)
        const id = response.data.id
        const name = response.data.name
        this.playlistService.editPlaylistName(id,name).subscribe(playlist => {
          this.playlist = playlist
        })
      }
    })
  }
}
