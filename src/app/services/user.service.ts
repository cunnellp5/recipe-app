import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserService {
  uid = observableOf('123');
  isAdmin = observableOf(true);
  constructor(private afAuth: AngularFireAuth) {}

  login() {}
  logout() {}
}
