import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  uid = this.afAuth.authState.pipe(
    map(authState => {
      return !authState ? null : authState.uid;
    }),
  );

  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if(!uid) {
        return observableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    })
  )

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
