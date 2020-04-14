import { UserService, IUser } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  private newUser:any;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  createUser() {

    let user: IUser = {
      first: "prb3",
      last: "prb4",
      identification: "13456"
    }

    this.userSvc.userCreate(user)
      .then(newUser => {
        this.newUser = newUser
        console.log(this.newUser.id)
      })
      .catch(error => console.log(error))
  }

}
