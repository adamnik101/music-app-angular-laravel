import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITrack} from "../../../../tracks/interfaces/i-track";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IArtist} from "../../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../../artists/services/artists.service";
import {TracksService} from "../../../../tracks/services/tracks.service";


@Component({
  selector: 'app-admin-track-form',
  templateUrl: './admin-track-form.component.html',
  styleUrls: ['./admin-track-form.component.scss']
})
export class AdminTrackFormComponent implements OnInit {
  add : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    track: new FormControl('', [Validators.required]),
    owner: new FormControl('',[Validators.required]),
    features: new FormControl('')
  })
  edit : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    track: new FormControl(''),
    owner: new FormControl('',[Validators.required]),
    features: new FormControl('')
  })
  selectedFile: any
  ext : string = '.mp3'
  artists : IArtist[] = []
  track!: ITrack

  constructor(@Inject(MAT_DIALOG_DATA) public data : ITrack,
              private dialogRef: MatDialogRef<AdminTrackFormComponent>,
              private artistsService: ArtistsService,
              private trackService: TracksService) { }

  ngOnInit(): void {
    this.getArtists()

  }
  getFeatures() {
    if (this.data) {
      this.edit.get('name')?.setValue(this.data.name)
      this.track = this.data
      let featuresSelected: number[] = []
      console.log(this.data.artists, this.artists)
      for (let item of this.data.artists) {
        if (item.pivot.artist_owner) {
          this.edit.get('owner')?.setValue(item.artist)
        } else {
          for (let artist of this.artists) {
            if (artist.id == item.id) {
              console.log('isti', artist)
                featuresSelected.push(artist.id)
            }
          }
        }
      }
      this.edit.get('features')?.setValue(featuresSelected)
    }
  }
  getArtists() {
    this.artistsService.getAllAdmin().subscribe(artists => {
      this.artists = artists
      this.getFeatures()
    })
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
  editTrack() {
    let name = this.edit.get('name')
    let owner = this.edit.get('owner')
    let features = this.edit.get('features')

    if(name?.valid && owner?.valid){
      this.trackService.editTrack(name.value, owner.value, features?.value, this.selectedFile, this.data.id)
        .subscribe(response => {
          this.dialogRef.close(response)
        })
    }
  }
  addTrack() {
    let name = this.add.get('name')
    let owner = this.add.get('owner')
    let features = this.add.get('features')

    if(name?.valid && owner?.valid && this.selectedFile){
      this.trackService.addTrack(name.value, owner.value, features?.value, this.selectedFile)
        .subscribe(response => {
          this.dialogRef.close(response)
        })
    }
  }
  cancel() {
    this.dialogRef.close()
  }
  onChange(id : string) {
    console.log(id);
  }
}
