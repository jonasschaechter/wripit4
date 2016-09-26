import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { StatisticPage } from '../statistic/statistic';
import { MediaPlugin } from 'ionic-native';
import { Platform } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {
 media: MediaPlugin;
 private _path: string;
 private _ending:string;
  

  constructor(private navCtrl: NavController, 
        public alertCrtl: AlertController,
        public platform: Platform) {
    this.navCtrl = navCtrl;
    this.platform = platform;
  }

 private getPathFileRecordAudio(): string {
     let path: string = (this.platform.is('ios') ? '../Library/NoCloud/': '../Documents/');
     this.showAlert(path);
     let _ending: string = (this.platform.is('ios') ? '.wav':'.amr');

     
     return path + 'wripit4' + _ending;
       }

// set path
ionViewDidEnter() {
    
    this.media = new MediaPlugin(this.getPathFileRecordAudio())
  } 
  
//show error message
showAlert(message) {
  let alert = this.alertCrtl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

//recording bottons
startRecording() {
  try {
    this.media.startRecord();
  }
  catch (e) {
    this.showAlert('Could not start recording.');
  }
}

stopRecording() {
  try {
    this.media.stopRecord();
    this.media.release();
    this.showAlert('Laenge' + this.media.getDuration());
  }
  catch (e) {
    this.showAlert('Could not stop recording.');
  }
}

startPlayback() {
  try {
    this.media.play();
  }
  catch (e) {
    this.showAlert('Could not play recording.');
  }
}

stopPlayback() {
  try {
    this.media.stop();
  }
  catch (e) {
    this.showAlert('Could not stop playing recording.');
  }
}

 //make Popup 
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

//link to Statistics
  goToStatistic(){
this.navCtrl.push(StatisticPage);

  }


}
