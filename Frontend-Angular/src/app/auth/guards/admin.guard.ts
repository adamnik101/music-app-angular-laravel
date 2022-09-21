import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('canActivate called')
    let isLoggedIn = this.authService.isAuthenticated()
    let admin = this.authService.user;
    if(isLoggedIn && admin.role_id == 1) {
      return true
    }
    else {
      this.router.navigate(['/home'])
      return false
    }
  }

}
