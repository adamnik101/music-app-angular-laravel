import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router} from "@angular/router";
import {IUser} from "../../interfaces/i-user";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = 'Login now!'
  subtitle: string = 'Login to make new playlists and have your favorite songs in one place!'
  hide = true
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.loggedIn()
  }
  login() {
    const val : IUser = this.form.value

    if(val.email && val.password) {
      this.authService.login(val).subscribe(response => {
        console.log(response.role_id)
        if(response.id) {
          this.authService.user = response;
          this.authService.userId = response.id
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/home']);
          this.authService.isLoggedIn = true
          return;
        }
        this._snackBar.open('Wrong email or password', '', {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 3 * 1000
        });
        return;
      })
    }
  }
}
