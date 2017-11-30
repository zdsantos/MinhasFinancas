import { TransactionProvider } from './../../providers/transaction/transaction';
import { Transaction } from './../../models/transaction';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsPage {

  loading = true;
  transactions: Observable<Transaction[]>;
  constructor(public navCtrl: NavController, private transactionProvider: TransactionProvider) {
    this.transactions = this.transactionProvider.list();
    this.transactions.subscribe(() => {
      this.loading = false;
    });
  }

  add(type: string) {
    this.navCtrl.push("NewTransactionPage", {type: type});
  }

}
