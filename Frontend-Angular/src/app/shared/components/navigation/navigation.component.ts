import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  opened: boolean = false
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedIn()
  }

  logout() {
    this.authService.logout()
  }
}
