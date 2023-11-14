import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { User, UserDetails } from '../models/user.model';
import { BasketService } from './basket.service';
import { DBServiceService } from './dbservice.service';

@Injectable({
  providedIn: 'root',
})
// TODO error handlng
export class AuthService {
  loggedIn: boolean;
  persistence: string = 'local';
  userEmail: any;
  key: any;
  user: User = new User(
    'none',
    new UserDetails('none', false, false, false, false, 'none'),
    [],
    []
  );

  constructor(
    public fireAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.loggedIn = false;
    this.fireAuth.authState.subscribe((res) => {
      this.loggedIn = res && res.uid ? true : false;
      if (this.loggedIn) {
        this.loggedIn = true;
        this.userEmail = res?.email;
        this.user.uid = res?.uid;
        this.loadUserData(this.user.uid + '');
      }
    });
  }

  signUp(email: string, password: string) {
    this.fireAuth.setPersistence(this.persistence);
    this.loggedIn = true;
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.db
          .list('users')
          .push(
            new User(
              res.user?.uid,
              new UserDetails(email, false, false, true, false, 'local'),
              [],
              []
            )
          );
        this.router.navigate(['/excursion-list']);
      });
  }

  logIn(email: string, password: string) {
    this.fireAuth.setPersistence(this.persistence);
    this.loggedIn = true;
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        let uid = res.user?.uid;
        this.loadUserData(uid + '');
        this.router.navigate(['/excursion-list']);
      });
  }

  signOut() {
    this.loggedIn = false;
    return this.fireAuth.signOut().then(() => {
      this.loadUserData('');
      window.location.reload();
      this.router.navigate(['/']);
    });
  }

  loadUserData(uid: string) {
    this.db
      .list('users')
      .valueChanges()
      .pipe(
        map((userList) => {
          for (let user of userList as User[]) {
            if (user.uid == uid) {
              this.user.details = user.details;
            }
          }
        })
      )
      .subscribe();

    this.db
      .list('users')
      .snapshotChanges()
      .pipe(first())
      .subscribe((users: any) => {
        for (let usr of users) {
          if (usr.payload.val().uid == this.user.uid) {
            this.key = usr.payload.key;
          }
        }
      });
  }

  public isLoggedIn(): boolean {
    return (
      this.user.details.admin ||
      this.user.details.manager ||
      this.user.details.user
    );
  }

  public canModify(): boolean {
    return this.user.details.admin || this.user.details.manager;
  }

  public isAdmin(): boolean {
    return this.user.details.admin;
  }
}
