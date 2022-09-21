import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IArtist} from "../../../../artists/interfaces/i-artist";
import {DialogRef} from "@angular/cdk/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArtistsService} from "../../../../artists/services/artists.service";

@Component({
  selector: 'app-admin-artists-form',
  templateUrl: './admin-artists-form.component.html',
  styleUrls: ['./admin-artists-form.component.scss']
})
export class AdminArtistsFormComponent implements OnInit {
  add : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    image : new FormControl('', [Validators.required])
  })
  edit : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    image: new FormControl('')
  })
  selectedFile: any
  ext : string = '.jpg,.jpeg,.png'
  constructor(@Inject(MAT_DIALOG_DATA) public data: IArtist,
              public dialogRef: MatDialogRef<AdminArtistsFormComponent>,
              private artistService: ArtistsService) { }

  ngOnInit(): void {
    if(this.data) {
      this.edit.get('name')?.setValue(this.data.artist)
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
  addArtist(){
    let name = this.add.get('name')
    let image = this.add.get('image')

    if(name?.valid && image?.valid){
      this.artistService.addArtist(name.value, this.selectedFile).subscribe(response => {
        this.dialogRef.close(response)
      })
    }
    console.log('add artist')
  }
  editArtist() {
    if (this.edit.get('name')?.valid && this.edit.valid) {
      this.artistService.editArtist(this.edit.get('name')?.value, this.selectedFile, this.data.id).subscribe(response => {
        this.dialogRef.close(response)
      })
    }
  }
  cancel() {
    this.dialogRef.close()
  }
}
