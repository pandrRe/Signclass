import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ContentProvider } from '../../providers/content/content';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  coursesInfo: Object;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider, 
    public modal: ModalController
  ) {}

  ionViewWillLoad(): void {
    this.content.getInfo()
      .subscribe(
        info => this.coursesInfo = info
      );
  }

  goToLevelPerf(course: number): void {
    const LevelPerformance = this.modal.create('LevelPerfPage', 
    {
        info: this.coursesInfo[course - 1]
    });
    LevelPerformance.present();
  }

}
