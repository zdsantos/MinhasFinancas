import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTransactionPage } from './new-transaction';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    NewTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTransactionPage),
    TextMaskModule
  ],
})
export class NewTransactionPageModule {}
