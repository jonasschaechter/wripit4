

import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';


/*import { Component, Nav } from `@angular/core`;
import { ionicBootstrap } from 'ionic-angular';*/
import { LoginPage } from './pages/login/login/';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

class MyApp {
  // set the rootPage to the first page we want displayed
  private rootPage: any = LoginPage;

  constructor(){
  }
}

ionicBootstrap(MyApp);
