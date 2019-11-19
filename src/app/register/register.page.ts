import { User } from './../shared/user.class';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log('Successfully created user!');
      this.router.navigateByUrl('/');
    }
  }
}
