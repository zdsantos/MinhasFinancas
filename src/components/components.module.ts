import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionItemComponent } from './transaction-item/transaction-item';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner';

@NgModule({
	declarations: [
		TransactionItemComponent,
		LoadingSpinnerComponent
	],
	imports: [ CommonModule ],
	exports: [
		TransactionItemComponent,
		LoadingSpinnerComponent
	]
})
export class ComponentsModule {}
