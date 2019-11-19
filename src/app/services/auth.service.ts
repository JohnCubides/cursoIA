import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { SelectValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  //login
  onLogin(user: User) {
    return new Promise((resolve, rejected) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(user => {
        resolve(user);
      }).catch(error => {
        console.log(error);
        rejected(error);
      });
    });
  }

  //register
  async onRegister(user: User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    } catch (error) {
      console.log('error on register', error);
    }
  }
}
