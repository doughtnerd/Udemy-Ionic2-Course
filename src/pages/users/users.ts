import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserPage} from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(
    private navController: NavController
  ) {}

  onLoadUser(name: string) {
    this.navController.push(UserPage, name);
  }

}
