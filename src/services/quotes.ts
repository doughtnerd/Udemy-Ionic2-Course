import {Quote} from "../data/quote.interface";
export class QuotesService {

  private favoriteQuotes: Quote[] = [];

  addFavorite(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeFavorite(quote: Quote) {
    const pos = this.favoriteQuotes.findIndex((current: Quote) => {
      return current.id == quote.id;
    })
    this.favoriteQuotes.splice(pos, 1);
  }

  getFavoriteQuotes(): Quote[] {
    return this.favoriteQuotes.slice();
  }
}
