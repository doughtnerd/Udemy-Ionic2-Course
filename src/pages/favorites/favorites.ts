import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private sService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove==true) {
        this.onRemoveFavorite(quote);
      }
    });
  }

  onRemoveFavorite(quote: Quote) {
    this.quotesService.removeFavorite(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  isAltBackground(): boolean {
    return this.sService.getAltBackground();
  }
}
