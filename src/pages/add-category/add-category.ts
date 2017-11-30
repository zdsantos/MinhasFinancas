import { Category } from './../../models/category';
import { CategoriesProvider } from './../../providers/categories/categories';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  name: string;
  icon: string;
  icons = [];
  constructor(public navCtrl: NavController, private categoriesProvider: CategoriesProvider) {
    this.icons = [
      {name: 'carro', icon: 'car'},
      {name: 'casa', icon: 'home'},
      {name: 'cartão', icon: 'card'},
      {name: 'carrinho', icon: 'cart'},
      {name: 'cesta', icon: 'basket'},
      {name: 'onibus', icon: 'bus'},
      {name: 'telefone', icon: 'call'},
      {name: 'engrenagem', icon: 'construct'}
    ];
  }

  ionViewDidLoad() { }

  save() {
    let c = new Category;
    c.name = this.name;
    c.icon = this.icon;
    this.categoriesProvider.create(c);

    this.navCtrl.pop();
  }

}
