import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user.model';
import { DBServiceService } from './dbservice.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  data: Observable<any[]>;

  constructor(private db: DBServiceService) {}

  getUsers() {
    this.data = this.db.db.list('users').snapshotChanges();
    return this.data;
  }

  saveChanges(details: UserDetails, key: string) {
    const usr = this.db.db.object('users/' + key);
    usr.update({ details: details });
  }
}
