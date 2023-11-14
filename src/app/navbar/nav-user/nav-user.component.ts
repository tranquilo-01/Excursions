import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css'],
})
export class NavUserComponent {
  loggedIn = false;
  constructor(private authService: AuthService) {
    this.loggedIn = authService.loggedIn;
  }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn;
  }

  logOut() {
    this.authService.signOut();
  }
}
