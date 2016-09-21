import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  constructor(private navCtrl: NavController) {

  }


//logout and set root to login page
// hier müssen alle Sessions und API Verbindungen getrennt werden
  logout() {

    this.navCtrl.setRoot(LoginPage);
}

}
