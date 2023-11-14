import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

//TODO repeat password validation
export class AuthComponent {
  register = false;

  constructor(private authService: AuthService) {}

  onAuth(form: NgForm) {
    console.log('Auth start');
    if (!this.register) {
      this.authService.logIn(form.value.email, form.value.password);
    } else {
      this.authService.signUp(form.value.email, form.value.password);
    }
    form.reset();
  }

  onChangeLogin() {
    this.register = false;
  }

  onChangeRegister() {
    this.register = true;
  }
}
