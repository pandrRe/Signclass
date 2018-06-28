import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { PerformanceProvider } from '../../providers/performance/performance';

import { PerformanceMap } from '../../app/performance-class';

@IonicPage()
@Component({
  selector: 'page-post-level',
  templateUrl: 'post-level.html',
})
export class PostLevelPage {
  info: PerformanceMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perf: PerformanceProvider) {
  }

  ionViewWillLoad(): void {
    this.info = this.navParams.get('data');
    this.perf.recordPerformance(this.info);
  }

  goBack(): void {
    this.navCtrl.pop();
  }

}
