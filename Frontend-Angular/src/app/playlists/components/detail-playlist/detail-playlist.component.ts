import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlaylistService} from "../../services/playlist.service";
import {IPlaylist} from "../../interfaces/i-playlist";
import {MatDialog} from "@angular/material/dialog";
import {AddTracksDialogComponent} from "../add-tracks-dialog/add-tracks-dialog.component";
import {AuthService} from "../../../auth/services/auth.service";
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.scss']
})
export class DetailPlaylistComponent implements OnInit {
  playlist!: IPlaylist
  artists: IArtist[] = []
  constructor(private addDialog: MatDialog,private route: ActivatedRoute, private playlistService: PlaylistService, public authService: AuthService,
              private artistsService: ArtistsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.getOnePlaylist(id)
    this.artistsService.getAllAdmin().subscribe(artists => this.artists = artists)
  }
  openAddDialog(): void {
    this.addDialog.open(AddTracksDialogComponent, {
      width: '50vw',
      data: this.playlist
    }).afterClosed().subscribe(() => {
      this.getOnePlaylist(this.playlist.id);
    })
  }
  getOnePlaylist(id: number) {
    this.playlistService.getOnePlaylist(id).subscribe(playlist => {
      this.playlist = playlist
    })
  }
}
