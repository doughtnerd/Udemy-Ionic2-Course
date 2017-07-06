import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    this.sService.setAltBackground(toggle.checked);
  }

  checkAltBackground(): boolean {
    return this.sService.getAltBackground();
  }

}
