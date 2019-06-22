import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp({
    apiKey: 'AIzaSyBCOh9pPWdTBFC9uchsPFC_VoIAC9Bdvi4',
    authDomain: 'attendancelist-f9109.firebaseapp.com',
    databaseURL: 'https://attendancelist-f9109.firebaseio.com',
    projectId: 'attendancelist-f9109',
    storageBucket: 'attendancelist-f9109.appspot.com',
    messagingSenderId: '423007922491',
    appId: '1:423007922491:web:3e70fbc4c780d8d2'
  }), AngularFireDatabaseModule , FormsModule , ReactiveFormsModule
=======
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), IonicStorageModule.forRoot({
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  }), AppRoutingModule, AngularFireModule.initializeApp({
    apiKey: '####',
    authDomain: '######',
    databaseURL: '#####',
    projectId: '######',
    storageBucket: '######',
    messagingSenderId: '#####',
    appId: '########'
  }), AngularFireDatabaseModule , FormsModule, ReactiveFormsModule
>>>>>>> 0b070df312b6f0c32d64d63246e07119ae1efd55
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ContactService,
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
