import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ITrack} from "../../../../tracks/interfaces/i-track";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {AdminDeleteDialogComponent} from "../../admin-delete-dialog/admin-delete-dialog.component";
import {TracksService} from "../../../../tracks/services/tracks.service";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {AdminTrackFormComponent} from "../admin-track-form/admin-track-form.component";
import {IArtist} from "../../../../artists/interfaces/i-artist";

@Component({
  selector: 'app-admin-track-table',
  templateUrl: './admin-track-table.component.html',
  styleUrls: ['./admin-track-table.component.scss']
})
export class AdminTrackTableComponent implements OnInit {
  @Input() owners!: IArtist[]
  public dataSource = new MatTableDataSource<ITrack>()
  @ViewChild(MatPaginator, {static: false}) paginator! : MatPaginator

  @Input() set tracks(value: ITrack[]) {
    this.dataSource = new MatTableDataSource<ITrack>(value!)
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['id', 'name', 'artists','features','edit', 'delete']
  constructor(private dialog: MatDialog, private trackService: TracksService, private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }
  getAll() {
    this.trackService.getAll().subscribe(tracks => this.tracks = tracks)
  }
  openDeleteDialog(track: ITrack) {
    this.dialog.open(AdminDeleteDialogComponent, {
      data: track
    })
      .afterClosed().subscribe(response => {
        if(response) {
          this.snackBar.showSnackbar(response.msg)
            this.getAll()
        }
    })
  }
  openEditDialog(track: ITrack) {
    this.dialog.open(AdminTrackFormComponent, {
      data: track
    }).afterClosed().subscribe(response => {
      if(response){
        this.snackBar.showSnackbar(response.msg)
        this.getAll()
      }
    })
  }
}
