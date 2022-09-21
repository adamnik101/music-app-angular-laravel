import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/components/home/home.component";
import {ArtistsComponent} from "./artists/components/artists/artists.component";
import {ContactComponent} from "./shared/components/contact/contact.component";
import {AuthorComponent} from "./shared/components/author/author.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {PlaylistsComponent} from "./playlists/components/playlists/playlists.component";
import {DetailPlaylistComponent} from "./playlists/components/detail-playlist/detail-playlist.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {AdminComponent} from "./admin/components/admin/admin.component";
import {AdminGuard} from "./auth/guards/admin.guard";
import {AdminTracksComponent} from "./admin/components/admin-tracks/admin-tracks.component";
import {AdminArtistsComponent} from "./admin/components/admin-artists/admin-artists.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {ArtistDetailComponent} from "./artists/components/artist-detail/artist-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'artists/:id', component: ArtistDetailComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'playlists', component: PlaylistsComponent, canActivate: [AuthGuard]},
  { path: 'playlists/:id', component: DetailPlaylistComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'tracks', component: AdminTracksComponent},
      { path: 'artists', component: AdminArtistsComponent}
    ]
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
