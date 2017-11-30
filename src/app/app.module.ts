import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginProvider } from '../providers/login/login';
import { TransactionProvider } from '../providers/transaction/transaction';
import { CategoriesProvider } from '../providers/categories/categories';
import { AccountProvider } from '../providers/account/account';

import { ComponentsModule } from '../components/components.module';

const config = {
  apiKey: "AIzaSyDeYD9zwTvb9htCvvkxNn-iz7jnYN3RYNs",
  authDomain: "minhas-financas-33f15.firebaseapp.com",
  databaseURL: "https://minhas-financas-33f15.firebaseio.com",
  projectId: "minhas-financas-33f15",
  storageBucket: "minhas-financas-33f15.appspot.com",
  messagingSenderId: "153713978572"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TransactionProvider,
    CategoriesProvider,
    AccountProvider
  ]
})
export class AppModule {}
