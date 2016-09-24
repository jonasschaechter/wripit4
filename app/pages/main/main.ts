import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { StatisticPage } from '../statistic/statistic';
//import { MediaCapture } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {

  constructor(private navCtrl: NavController, public alertCrtl: AlertController) {
    this.navCtrl = navCtrl;
  }
doAlert() {
 let alert = this.alertCrtl.create({
        title: 'Statistics',
        subTitle: 'soo you will find your range and influence rank',
        buttons: ['OK']
      });
      alert.present();

  }
//link to Settings
  goToSettings(){
this.navCtrl.push(SettingsPage);

  }

//link to Settings
  goToStatistic(){
this.navCtrl.push(StatisticPage);

  }


}
