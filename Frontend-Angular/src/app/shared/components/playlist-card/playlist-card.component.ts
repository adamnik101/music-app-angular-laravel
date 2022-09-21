import {Component, Input, OnInit} from '@angular/core';
import {IPlaylist} from "../../../playlists/interfaces/i-playlist";
import {MatDialog} from "@angular/material/dialog";
import {PlayerService} from "../../../player/services/player.service";
import {ITrack} from "../../../tracks/interfaces/i-track";

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist: IPlaylist = {} as IPlaylist
  @Input() add!: boolean
  constructor(public dialog: MatDialog, private playerService: PlayerService) { }

  ngOnInit(): void {
    console.log(this.playlist)
  }

  playPlaylist(playlist : IPlaylist) {
    this.playerService.queue = playlist.tracks
    this.playerService.playPlaylist(playlist)
  }
}
