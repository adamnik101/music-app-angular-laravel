import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {MatPaginator} from "@angular/material/paginator";
import {PlayerService} from "../../../player/services/player.service";
import {IPlaylist} from "../../../playlists/interfaces/i-playlist";
import {PlaylistService} from "../../../playlists/services/playlist.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogDeleteTrackPlaylistComponent
} from "../../../playlists/components/dialog-delete-track-playlist/dialog-delete-track-playlist.component";
import {IArtist} from "../../../artists/interfaces/i-artist";

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.scss']
})
export class TrackTableComponent implements OnInit {
  @Input() user!: number
  @Input() owners!: IArtist[]
  @Input() set tracks(value: ITrack[]) {
    this.dataSource = new MatTableDataSource<ITrack>(value!)
    this.dataSource.paginator = this.paginator;
  }
  public dataSource = new MatTableDataSource<ITrack>()

  @ViewChild(MatPaginator, {static: false}) paginator! : MatPaginator
  @ViewChild("paginator")
  set pag(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  @Input() playlist! : IPlaylist
  displayedColumns: string[] = ['id', 'name', 'owner', 'features', 'play', 'delete']
  @Input() addToPlaylist : boolean = false
  constructor(public dialog: MatDialog,private snack: MatSnackBar ,private playerService: PlayerService, private playlistService: PlaylistService, private route: Router, public auth: AuthService) { }

  ngOnInit(): void { }

  playTrack(track: ITrack) {
    this.playerService.playTrack(track)
  }
  search(ev: Event) {
    const value = (ev.target as HTMLInputElement).value
    this.dataSource.filter = value.trim().toLowerCase()
  }
  addTrackToPlaylist(track: ITrack, playlist: IPlaylist) {
    this.playlistService.addTrackToPlaylist(track, playlist).subscribe(() => {
      this.snack.open('You have successfully added a track to playlist.', '', {
        verticalPosition: "top",
        horizontalPosition: "center",
        duration: 3000
      })
    })
  }
  openDeleteDialog(playlist: IPlaylist, track: ITrack) : void {
    this.dialog.open(DialogDeleteTrackPlaylistComponent, {
     data: {
       playlist: playlist,
       track: track
     }
    })
      .afterClosed().subscribe(playlist => {
        this.tracks = playlist.tracks
        this.playlist = playlist
    })
  }
}
