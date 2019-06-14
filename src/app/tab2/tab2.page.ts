import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

public csvItems : any;
 // tslint:disable-next-line:no-trailing-whitespace
 constructor(private storage: Storage,public navCtrl: NavController,
            public http   : HttpClient) { }


ionViewWillEnter(){
   this.loadCSV();
}


loadCSV(){ 
   this.http.get('../../assets/data/lista.csv', {responseType: 'text'})
   .subscribe((data)=>
   {
      var csv         = this.parseCSVFile(data);
      this.csvItems  = csv;
   });
}



parseCSVFile(str){
   var arr  = [],
       obj  = [],
       row,
       col,
       c,
       quote   = false;  // true means we're inside a quoted field

   // iterate over each character, keep track of current row and column (of the returned array)
   for (row = col = c = 0; c < str.length; c++)
   {
      var cc = str[c],
          nc = str[c+1];        // current character, next character

      arr[row]           = arr[row] || [];
      arr[row][col]  = arr[row][col] || '';

      /* If the current character is a quotation mark, and we're inside a
    quoted field, and the next character is also a quotation mark,
    add a quotation mark to the current column and skip the next character
      */
      if (cc == '"' && quote && nc == '"')
      {
         arr[row][col] += cc;
         ++c;
         continue;
      }


      // If it's just one quotation mark, begin/end quoted field
      if (cc == '"')
      {
         quote = !quote;
         continue;
      }


      // If it's a comma and we're not in a quoted field, move on to the next column
      if (cc == ',' && !quote)
      {
         ++col;
         continue;
      }


      /* If it's a newline and we're not in a quoted field, move on to the next
         row and move to column 0 of that new row */
      if (cc == '\n' && !quote)
      {
         ++row;
         col = 0;
         continue;
      }

      // Otherwise, append the current character to the current column
      arr[row][col] += cc;
   }

   return this.formatParsedObject(arr, false);
}



formatParsedObject(arr, hasTitles){
   let id,
       title,
       publisher,
       genre,
       obj = [];

   for (var j = 0; j < arr.length; j++) {
      var items         = arr[j];

      if (items.indexOf('') === -1) {
         if (hasTitles === true && j === 0) {
            id            = items[0];
            title        = items[1];
            publisher    = items[2];
            genre         = items[3];
         } else {
            items = items[0].split(';');
            obj.push({
               id          : items[0],
               title       : items[1],
               publisher   : items[2],
               genre       : items[3]
            });
         }
      }
   }
   return obj;
}

 setData() {
   this.storage.set('midia', this.csvItems);
 }


}
