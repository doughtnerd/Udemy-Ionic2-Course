import { Component } from '@angular/core';
import {UsersPage} from "../users/users";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userPage = UsersPage;
  shopPage = ShopPage;

}
