import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  async onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
