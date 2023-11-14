import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { UserAdmin } from '../models/user-admin.model';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {
  @ViewChild('f') excForm: NgForm;
  users: UserAdmin[] = [];

  constructor(private usersService: UsersService, private auth: AuthService) {}

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .pipe(first())
      .subscribe((data: any) => {
        for (let usr of data) {
          let newUser = new UserAdmin(
            usr.payload.val().uid,
            usr.key,
            usr.payload.val().details.email,
            usr.payload.val().details.admin,
            usr.payload.val().details.manager,
            usr.payload.val().details.user,
            usr.payload.val().details.banned,
            usr.payload.val().details.persistence
          );
          this.users.push(newUser);
        }
      });
  }

  onChangePersistence() {
    let details = this.auth.user.details;
    details.persistence = this.excForm.value.pers;
    let key = this.auth.key;
    this.auth.fireAuth.setPersistence(details.persistence);
    this.usersService.saveChanges(details, key);
    this.excForm.form.markAsPristine();
  }

  logUsers() {
    console.log(this.users);
  }
}
