import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { StatisticPage } from '../statistic/statistic';
import { AudioRecorder } from '../../services/audiorecorder';


@Component({
  templateUrl: 'build/pages/main/main.html',
  providers: [AudioRecorder]
})
export class MainPage {
  constructor(
    private navCtrl: NavController, 
    public alertCrtl: AlertController,
    public audioRecorder: AudioRecorder) {
    this.navCtrl = navCtrl;
     
  }
 

startRecording() {
  try {
    this.audioRecorder.startRecording();
  }
  catch (e) {
    this.showAlert('Could not start recording.');
  }
}

stopRecording() {
  try {
    this.audioRecorder.stopRecording();
  }
  catch (e) {
    this.showAlert('Could not stop recording.');
  }
}

startPlayback() {
  try {
    this.audioRecorder.startPlayback();
  }
  catch (e) {
    this.showAlert('Could not play recording.');
  }
}

stopPlayback() {
  try {
    this.audioRecorder.stopPlayback();
  }
  catch (e) {
    this.showAlert('Could not stop playing recording.');
  }
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

//show popup
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
this.navCtrl.push(SettingsPage, {
direction: 'back',
animation: false 
});

  }

//link to Settings
  goToStatistic(){
this.navCtrl.push(StatisticPage);

  }


}
