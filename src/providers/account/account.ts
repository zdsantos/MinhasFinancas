import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Account } from './../../models/account';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountProvider {

  constructor(private database: AngularFireDatabase) {
    console.log('Hello AccountProvider Provider');
  }

  create(account: Account) {
    let ref = this.database.database.ref('accounts').push();

    account.id = ref.key;
    return ref.set(account);
  }

  list() :  Observable<Account[]>{
    return this.database.list('accounts').valueChanges();
  }

  get(id: string) : Observable<Account> {
    return this.database.object('accounts/' + id).valueChanges();
  }

  remove(account: Account) {
    return this.database.object('accounts/' + account.id).remove();
  }

  update(account: Account) {
    return this.database.object('accounts/' + account.id).set(account);
  }
}
