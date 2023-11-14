import { Component, Input } from '@angular/core';
import { UserAdmin } from 'src/app/models/user-admin.model';
import { UserDetails } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  constructor(private usersService: UsersService) {}

  @Input() user: UserAdmin;
  adminmod: boolean = false;
  managermod: boolean = false;
  usermod: boolean = false;
  banmod: boolean = false;

  onSwitchAdmin() {
    this.adminmod = !this.adminmod;
    this.user.admin = !this.user.admin;
  }
  onSwitchManager() {
    this.managermod = !this.managermod;
    this.user.manager = !this.user.manager;
  }
  onSwitchUser() {
    this.usermod = !this.usermod;
    this.user.user = !this.user.user;
  }
  onSwitchBanned() {
    this.banmod = !this.banmod;
    this.user.banned = !this.user.banned;
  }

  canSave() {
    return this.adminmod || this.usermod || this.managermod || this.banmod;
  }

  onSave() {
    this.adminmod = false;
    this.managermod = false;
    this.usermod = false;
    this.banmod = false;
    let newDetails = new UserDetails(
      this.user.email,
      this.user.admin,
      this.user.manager,
      this.user.user,
      this.user.banned,
      this.user.persistence
    );
    this.usersService.saveChanges(newDetails, this.user.dbkey);
  }
}
