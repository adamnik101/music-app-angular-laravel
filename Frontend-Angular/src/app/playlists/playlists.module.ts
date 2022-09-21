import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {PlaylistsComponent} from "./components/playlists/playlists.component";
import {DetailPlaylistComponent} from "./components/detail-playlist/detail-playlist.component";
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { AddTracksDialogComponent } from './components/add-tracks-dialog/add-tracks-dialog.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { DialogDeleteTrackPlaylistComponent } from './components/dialog-delete-track-playlist/dialog-delete-track-playlist.component';
import {PlaylistCardComponent} from "../shared/components/playlist-card/playlist-card.component";
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    PlaylistsComponent,
    DetailPlaylistComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    AddTracksDialogComponent,
    DialogEditComponent,
    DialogDeleteTrackPlaylistComponent,
    PlaylistCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppModule
  ],
  exports: [
    PlaylistsComponent,
    DetailPlaylistComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    AddTracksDialogComponent,
    DialogEditComponent,
    DialogDeleteTrackPlaylistComponent,
    PlaylistCardComponent
  ]
})
export class PlaylistsModule { }
