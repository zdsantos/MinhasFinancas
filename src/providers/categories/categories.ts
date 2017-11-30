import { Category } from './../../models/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriesProvider {

  constructor(private database: AngularFireDatabase) {
    
  }

  create(category: Category) {
    let ref = this.database.database.ref('categories').push();
    category.id = ref.key;
    return ref.set({
      id: category.id,
      name: category.name,
      icon: category.icon
    })
  }

  list(filter?: string) :  Observable<Category[]>{
    if(filter && filter.length > 2) {
      console.log('buscando com filtro', filter);
      return this.database.list('/categories', ref => ref.orderByChild('name').startAt(filter)).valueChanges();
    } else {
      console.log('buscando sem filtro');
      return this.database.list('/categories').valueChanges();
    }
  }

  remove(category: Category) {
    return this.database.object('categories/' + category.id).remove();
  }

  update(category: Category) {
    return this.database.object('categories/' + category.id).set(category);
  }

}
