import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/i-user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
import {serverPath} from "../../constants/server";
import {api} from "../../constants/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId! : number
  user : IUser = {} as IUser
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.isLoggedIn
  }
  login(user : IUser) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post<IUser>(serverPath + api.login, user, options)
  }
  logout() {
    localStorage.removeItem('user')
    this.isLoggedIn = false
    this.userId = 0
    this.router.navigate(['/home'])
  }
  loggedIn(): void{
    let userLogin = JSON.parse(localStorage.getItem("user")!);
    if(userLogin == null){
      console.log('no user logged in')
    }
    else{
      this.user = userLogin
      this.userId = userLogin.id
      this.isLoggedIn = true
      this.router.navigate(['/home'])
    }
  }
}
