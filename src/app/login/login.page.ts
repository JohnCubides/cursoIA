import { User } from './../shared/user.class';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = new User();
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onLogin() {
    this.authSvc.onLogin(this.user).then(user => {
      console.log(user);
      this.router.navigateByUrl('/');
    }).catch(error =>alert('los datos son incorrectos o no existe el usuario'));
  }

}
