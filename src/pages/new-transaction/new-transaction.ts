import { TransactionProvider } from './../../providers/transaction/transaction';
import { Transaction } from '../../models/transaction';
import { Component } from '@angular/core';
import {ToastController, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../models/category';
import { Account } from '../../models/account';
import { CategoriesProvider } from '../../providers/categories/categories';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
  selector: 'page-new-transaction',
  templateUrl: 'new-transaction.html',
})
export class NewTransactionPage {

  transaction: Transaction;
  title: string;
  masks: any;
  categories: Observable<Category[]>;
  accounts: Observable<Account[]>;
  selectedDateTime: string;

  selectOptions: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionProvider: TransactionProvider,
    private categoriesProvider: CategoriesProvider, private accountProvider: AccountProvider, private toastCtrl: ToastController) {
    this.transaction = new Transaction();
    this.transaction.type = this.navParams.get('type');
    console.log(this.transaction);
    this.selectedDateTime = this.transaction.date.toISOString();

    this.masks = {
      currency: [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,',', /\d/, /\d/]
    }

    this.selectOptions = { mode: 'ios' };

    this.categories = this.categoriesProvider.list();
    this.accounts = this.accountProvider.list();

    if(this.transaction.type == 'income') this.title = "Receita";
    else this.title = "Despesa";
  }

  save() {
    // this.transaction.value = 20;
    // this.transaction.describe = "Gasolina";
    // this.transaction.category = {id: '-KwzBGplMRGHpeyw4cr9', name: 'Transporte', icon: 'car'};
    // this.transaction.account = '-KwzWodeBb0sEWCn7UfI';

    this.transaction.date = new Date(this.selectedDateTime);
    console.log(this.transaction);
    const error = this.validate();

    if(error) {
      console.log(error);
      const toast = this.toastCtrl.create({
        message: error,
        duration: 2000
      });
      toast.present();
      return;
    }

    console.log('passou');
    
    this.transactionProvider.create(this.transaction).subscribe(() => {
      this.navCtrl.pop();
    }, (err) => {
      console.error("[ERROR] new-transaction, save", err);
    })
  }

  validate() {
    if(this.transaction.describe.length < 3) {
      return 'Descrição deve ter pelo menos 3 caracteres';
    }
    if(this.transaction.category === null) {
      return 'Selecione uma categoria';
    }
    if(this.transaction.account === null) {
      return 'Selecione uma conta';
    }
    if(this.transaction.value <= 0) {
      return 'Informe um valor válido';
    }
    return null;
  }

}
