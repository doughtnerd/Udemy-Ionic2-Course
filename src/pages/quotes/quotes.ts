import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quotes: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }

  // ionViewDidLoad() {
  //   this.quotes = this.navParams.data;
  // add elvis operator (?) in template to use this approach.
  // }

  ngOnInit() {
    this.quotes = this.navParams.data;
  }

  onAddFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Favorite',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, I\'m sure',
          handler: () => {
            console.log('Adding to favorites: ', selectedQuote);
            this.quotesService.addFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

}
