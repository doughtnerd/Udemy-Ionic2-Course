import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote: Quote;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.quote = this.navParams.data;
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

  onUnfavorite() {

  }

}
