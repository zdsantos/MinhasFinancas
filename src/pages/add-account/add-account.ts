import { AccountProvider } from './../../providers/account/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Account } from '../../models/account';

@IonicPage()
@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {

  account: Account = new Account();
  types = []
  selectOptions: {};
  masks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,
    private accountProvider: AccountProvider) {
    this.types = [
      // {name: 'Selecione', icon: ''},
      {name: 'Dinheiro', icon: 'cash'},
      {name: 'Poupança', icon: 'filing'},
      {name: 'Banco', icon: 'key'},
      {name: 'Investimento', icon: 'trending-up'}
    ]

    this.selectOptions = { mode: 'ios' };

    this.masks = {
      currency: [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,',', /\d/, /\d/]
    }
  }

  ionViewDidLoad() { }

  save() {

    if(!this.account.name || this.account.name.length <= 2) {
      this.toastCtrl.create({
        message: "Nome deve ter no mínimo 3 caracteres"
      }).present();
      return;
    }

    if(this.account.type.name == 'Selecione') {
      this.toastCtrl.create({
        message: "Selecione um tipo"
      }).present();
      return;
    }
    
    console.log(this.account);
    this.accountProvider.create(this.account).then(() => {
      this.navCtrl.pop();
    })
  }

}
