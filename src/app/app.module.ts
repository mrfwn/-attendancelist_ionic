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

import { IonicStorageModule } from '@ionic/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), IonicStorageModule.forRoot({
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  }), AppRoutingModule, AngularFireModule.initializeApp({
    apiKey: 'AIzaSyBCOh9pPWdTBFC9uchsPFC_VoIAC9Bdvi4',
    authDomain: 'attendancelist-f9109.firebaseapp.com',
    databaseURL: 'https://attendancelist-f9109.firebaseio.com',
    projectId: 'attendancelist-f9109',
    storageBucket: 'attendancelist-f9109.appspot.com',
    messagingSenderId: '423007922491',
    appId: '1:423007922491:web:3e70fbc4c780d8d2'
  }), AngularFireDatabaseModule , FormsModule, ReactiveFormsModule
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
