import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // tslint:disable-next-line:no-trailing-whitespace
  constructor(private storage: Storage) { }

  getData() {
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });
  }

 getAllData() {
    this.storage.forEach( (value, key, index) => {
    console.log('This is the value', value);
    console.log('from the key', key);
    console.log('Index is', index);
  });
 }
}
