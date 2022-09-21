import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPlaylist} from "../../interfaces/i-playlist";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../shared/services/snackbar.service";

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {
  value : string = ''
  formData : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)])
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPlaylist, public dialog: MatDialogRef<DialogEditComponent>, private snackBar: SnackbarService) { }

  ngOnInit(): void {
    this.formData.get('name')?.setValue(this.data.name);
  }
  cancel() : void {
    this.dialog.close()
  }
  save() : void {
    if(this.formData.valid) {
      this.dialog.close({
        data: {
          id : this.data.id,
          name: this.formData.value.name
        }
      })
      this.snackBar.showSnackbar('You have successfully changed the name of the playlist!')
    }
  }
}
