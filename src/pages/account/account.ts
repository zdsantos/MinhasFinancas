import { AccountProvider } from './../../providers/account/account';
import { Account } from './../../models/account';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  loading = true;
  accounts: Observable<Account[]>
  constructor(public navCtrl: NavController, private accountProvider: AccountProvider) {

    this.accounts = this.accountProvider.list();
    this.accounts.subscribe(() => {
      this.loading = false;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  open(acc) {
    console.log(acc);
  }

  add() {
    this.navCtrl.push("AddAccountPage");
  }

}
