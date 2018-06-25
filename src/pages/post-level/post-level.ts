import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post-level',
  templateUrl: 'post-level.html',
})
export class PostLevelPage {
  info: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.info = this.navParams.get('data');
  }

  goBack(): void {
    this.navCtrl.pop();
  }

}
