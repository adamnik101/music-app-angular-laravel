import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PlaylistService} from "../../services/playlist.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.scss']
})
export class DialogAddComponent implements OnInit {
  selectedFile!: any
  ext : string = '.jpg,.jpeg,.png'
  form : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cover: new FormControl('', [Validators.pattern('^[^.]+.jpg$')])
  })
  constructor(public dialog: MatDialogRef<DialogAddComponent>, private playlistService: PlaylistService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  cancel () : void {
    this.dialog.close()
  }
  save() : void {
    this.playlistService.addUserPlaylist(this.form.value.name, this.selectedFile, this.authService.userId).subscribe(response => {
      this.dialog.close()
    })
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
}
