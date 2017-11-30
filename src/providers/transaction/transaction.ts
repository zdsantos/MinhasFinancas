import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransactionProvider {

  constructor(private database: AngularFireDatabase) {
    
  }

  create(transaction: Transaction): Observable<any> {
    return new Observable((observer) => {

      let ref = this.database.database.ref('transactions').push();
      transaction.id = ref.key;
      
      ref.set(transaction).then(() => {
        this.database.database.ref('accounts/' + transaction.account + '/balance').once('value', (snap) => {
          
          let atualBalance = +snap.val();
          let valueUpdate: number = transaction.type === 'income' ? +transaction.value : +(-transaction.value);
          this.database.database.ref('accounts/' + transaction.account + '/balance').set(atualBalance + valueUpdate)
            .then(() => {
              observer.next();
              observer.complete();
            }).catch((err) => {
              this.database.object('transactions/' + transaction.id).remove().then(() => {
                observer.error();
              });
            })
        });
      })
    });
  }

  list():  Observable<Transaction[]>{
    return this.database.list('transactions').valueChanges();
  }

  remove(transaction: Transaction): Observable<any> {
    return new Observable((observer) => {
      this.database.object('transactions/' + transaction.id).remove().then(() => {
        this.database.database.ref('accounts/' + transaction.account + '/balance').once('value', (snap) => {
          
          let atualBalance = +snap.val();
          let valueUpdate: number = transaction.type === 'income' ? +transaction.value : +(-transaction.value);
          this.database.database.ref('accounts/' + transaction.account + '/balance').set(atualBalance - valueUpdate)
            .then(() => {
              observer.next();
              observer.complete();
            }).catch((err) => {
              this.database.object('transactions/' + transaction.id).remove().then(() => {
                observer.error();
              });
            })
        });
      });
    });
  }

  update(transaction: Transaction) {
    return this.database.object('transactions/' + transaction.id).set(transaction);
  }
}
