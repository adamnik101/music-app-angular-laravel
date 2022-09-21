import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snack: MatSnackBar) { }

  showSnackbar(message: string) : void {
    this.snack.open(message, '', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000
    })
  }
}
