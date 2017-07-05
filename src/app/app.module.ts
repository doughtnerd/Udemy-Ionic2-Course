import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LibraryPageModule} from "../pages/library/library.module";
import {QuotePageModule} from "../pages/quote/quote.module";
import {QuotesPageModule} from "../pages/quotes/quotes.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {TabsPage} from "../pages/tabs/tabs";
import {FavoritesPageModule} from "../pages/favorites/favorites.module";

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FavoritesPageModule,
    LibraryPageModule,
    QuotesPageModule,
    QuotePageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
