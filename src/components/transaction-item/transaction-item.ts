import { Transaction } from './../../models/transaction';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction-item',
  templateUrl: 'transaction-item.html',
  inputs: ['transaction']
})
export class TransactionItemComponent {

  @Input() transaction: Transaction;

  constructor() {
    console.log('Hello TransactionItemComponent Component');
  }

}
