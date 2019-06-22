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
