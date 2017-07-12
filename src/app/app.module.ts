import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ShoppingListPageModule} from "../pages/shopping-list/shopping-list.module";
import {RecipeListPageModule} from "../pages/recipe-list/recipe-list.module";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {EditRecipePageModule} from "../pages/edit-recipe/edit-recipe.module";
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {RecipePage} from "../pages/recipe/recipe";
import {RecipePageModule} from "../pages/recipe/recipe.module";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ShoppingListPageModule,
    RecipeListPageModule,
    EditRecipePageModule,
    RecipePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipeListPage,
    ShoppingListPage,
    EditRecipePage,
    RecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
