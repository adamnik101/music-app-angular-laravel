import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminArtistsFormComponent} from "./admin-artists-form/admin-artists-form.component";
import {SnackbarService} from "../../../shared/services/snackbar.service";

@Component({
  selector: 'app-admin-artists',
  templateUrl: './admin-artists.component.html',
  styleUrls: ['./admin-artists.component.scss']
})
export class AdminArtistsComponent implements OnInit {
  artists: IArtist[] = []
  title: string = 'Manage all artists'
  constructor(private artistsService: ArtistsService,
              private dialog: MatDialog,
              private snackBar: SnackbarService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.artistsService.getAllAdmin().subscribe(artists => this.artists = artists)
  }
  openAddDialog() {
    this.dialog.open(AdminArtistsFormComponent)
      .afterClosed().subscribe(response => {
      if(response) {
        this.snackBar.showSnackbar(response.msg)
        this.getAll()
      }
    })
  }
}
