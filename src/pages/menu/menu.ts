import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  perPages = []
  configPages = []
  constructor(public navCtrl: NavController) {
    this.perPages = [
      {
        title: 'Perfil',
        icon: 'person',
        page: 'PerfilPage'
      },
      {
        title: 'Contas',
        icon: 'briefcase',
        page: 'AccountPage'
      },
      {
        title: 'Categorias',
        icon: 'list',
        page: 'CategoriesPage'
      }
    ]
  }

  openPage(page) {
    this.navCtrl.push(page.page);
  }

}
