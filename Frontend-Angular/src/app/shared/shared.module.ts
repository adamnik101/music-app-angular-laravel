import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from "./components/header/header.component";
import {LogoComponent} from "./components/logo/logo.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {DialogEditComponent} from "../playlists/components/dialog-edit/dialog-edit.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ArtistCardComponent} from "./components/artist-card/artist-card.component";
import {AuthorComponent} from "./components/author/author.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PlaylistCardComponent} from "./components/playlist-card/playlist-card.component";
import {TrackTableComponent} from "./components/track-table/track-table.component";
import {PlaylistsComponent} from "../playlists/components/playlists/playlists.component";
import {DetailPlaylistComponent} from "../playlists/components/detail-playlist/detail-playlist.component";
import {DialogAddComponent} from "../playlists/components/dialog-add/dialog-add.component";
import {DialogDeleteComponent} from "../playlists/components/dialog-delete/dialog-delete.component";
import {AddTracksDialogComponent} from "../playlists/components/add-tracks-dialog/add-tracks-dialog.component";
import {DialogDeleteTrackPlaylistComponent} from "../playlists/components/dialog-delete-track-playlist/dialog-delete-track-playlist.component";
import {ArtistPipe} from "../pipes/artist.pipe";
import {TruncatePipe} from "../pipes/truncate.pipe";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ArtistDetailComponent} from "../artists/components/artist-detail/artist-detail.component";
import {ArtistsComponent} from "../artists/components/artists/artists.component";
import {AdminComponent} from "../admin/components/admin/admin.component";
import {AdminTrackFormComponent} from "../admin/components/admin-tracks/admin-track-form/admin-track-form.component";
import {MatSelectModule} from "@angular/material/select";
import {OwnerPipe} from "../pipes/owner.pipe";
import {AdminTrackTableComponent} from "../admin/components/admin-tracks/admin-track-table/admin-track-table.component";
import {AdminTracksComponent} from "../admin/components/admin-tracks/admin-tracks.component";
import {FeaturesPipe} from "../pipes/features.pipe";
import {TrackCardComponent} from "./components/track-card/track-card.component";
import {AdminArtistsComponent} from "../admin/components/admin-artists/admin-artists.component";
import {AdminArtistsFormComponent} from "../admin/components/admin-artists/admin-artists-form/admin-artists-form.component";
import {AdminArtistTableComponent} from "../admin/components/admin-artists/admin-artist-table/admin-artist-table.component";
import {AdminDeleteDialogComponent} from "../admin/components/admin-delete-dialog/admin-delete-dialog.component";
import {LoginComponent} from "../auth/components/login/login.component";
import {FeaturesIdPipe} from "../pipes/features-id.pipe";
@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    DialogEditComponent,
    ContactComponent,
    ArtistCardComponent,
    AuthorComponent,
    HomeComponent,
    LogoComponent,
    NotFoundComponent,
    PlaylistCardComponent,
    TrackTableComponent,
    PlaylistsComponent,
    DetailPlaylistComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    AddTracksDialogComponent,
    DialogEditComponent,
    DialogDeleteTrackPlaylistComponent,
    PlaylistCardComponent,
    TrackTableComponent,
    ArtistPipe,
    OwnerPipe,
    TruncatePipe,
    FeaturesPipe,
    ArtistDetailComponent,
    ArtistsComponent,
    AdminComponent,
    AdminTracksComponent,
    AdminTrackFormComponent,
    AdminTrackTableComponent,
    TrackCardComponent,
    AdminArtistsComponent,
    AdminArtistsFormComponent,
    AdminArtistTableComponent,
    AdminDeleteDialogComponent,
    LoginComponent,
    FeaturesIdPipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    DialogEditComponent,
    ContactComponent,
    ArtistCardComponent,
    AuthorComponent,
    HomeComponent,
    LogoComponent,
    NotFoundComponent,
    PlaylistCardComponent,
    TrackTableComponent,
    ArtistPipe,
    OwnerPipe,
    TruncatePipe,
    FeaturesPipe,
    FeaturesIdPipe,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    ArtistDetailComponent,
    ArtistsComponent,
    AdminComponent,
    AdminTracksComponent,
    AdminTrackFormComponent,
    AdminTrackTableComponent,
    TrackCardComponent,
    AdminArtistsComponent,
    AdminArtistsFormComponent,
    AdminArtistTableComponent,
    AdminDeleteDialogComponent
  ]
})
export class SharedModule { }
