import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {IArtist} from "../../../../artists/interfaces/i-artist";
import {MatDialog} from "@angular/material/dialog";
import {AdminDeleteDialogComponent} from "../../admin-delete-dialog/admin-delete-dialog.component";
import {ArtistsService} from "../../../../artists/services/artists.service";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {AdminArtistsFormComponent} from "../admin-artists-form/admin-artists-form.component";

@Component({
  selector: 'app-admin-artist-table',
  templateUrl: './admin-artist-table.component.html',
  styleUrls: ['./admin-artist-table.component.scss']
})
export class AdminArtistTableComponent implements OnInit {
  public dataSource = new MatTableDataSource<IArtist>()
  @ViewChild('paginator', {static: false}) paginator! : MatPaginator

  @Input() set artists (value: IArtist[]) {
    this.dataSource = new MatTableDataSource<IArtist>(value!)
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['id', 'name', 'tracks', 'edit', 'delete']

  constructor(private dialog: MatDialog,
              private artistsService: ArtistsService,
              private snackBar : SnackbarService) { }

  ngOnInit(): void {
  }
  openDeleteDialog(artist: IArtist) {
    this.dialog.open(AdminDeleteDialogComponent, {
      data: artist
    })
      .afterClosed().subscribe(response => {
        if(response) {
          this.snackBar.showSnackbar(response.msg)
          this.artistsService.getAll().subscribe(artists => this.artists = artists)
        }
    })
  }
  openEditDialog(artist: IArtist) {
    this.dialog.open(AdminArtistsFormComponent, {
      data: artist
    })
      .afterClosed().subscribe(response => {
      if(response) {
        this.snackBar.showSnackbar(response.msg)
        this.artistsService.getAll().subscribe(artists => this.artists = artists)
      }
    })
  }
}
