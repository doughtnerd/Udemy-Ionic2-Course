import {Component, Input, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit{

  name: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.name = this.navParams.data;
    // or this.navParams.data.get('username') if its an object.
  }

  onGoBack() {
    // this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }

}
