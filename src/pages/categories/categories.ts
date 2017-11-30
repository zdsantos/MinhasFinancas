import { CategoriesProvider } from './../../providers/categories/categories';
import { Category } from './../../models/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  filter = "";
  categories: Observable<Category[]>;
  filterDebouncer: any;

  constructor(public navCtrl: NavController, private categoriesProvider: CategoriesProvider, private popoverCtrl: PopoverController) {
    this.categories = this.categoriesProvider.list();
    this.categories.subscribe(data => {
      console.log(data);
    })
  }

  updateList() {
    console.log('filter', this.filter);
    clearTimeout(this.filterDebouncer);

    this.filterDebouncer = setTimeout(() => {
      this.categories = this.categoriesProvider.list(this.filter);
    }, 500);
  }

  add() {
    let pop = this.popoverCtrl.create("AddCategoryPage");
    pop.present();
  }

  open(c) {
    console.log(c);
  }

  delete(c) {
    // TODO: alerta pq vai apagar todas as transações dessa categoria
    this.categoriesProvider.remove(c);
  }

}
