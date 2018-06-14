import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { Level } from '../../app/levels-class';
import { LEVELS } from '../../app/mock-levels';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html'
})
export class LevelsPage {

  public course: string;
  public levels: Level[] = LEVELS;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public popCtrl: PopoverController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelsPage');
    this.course = this.navParams.get('course');
  }

  openPop(ev, level: Level): void {
    let popover = this.popCtrl.create(PopoverPage, {level: level});
    popover.present({
        ev: ev
    });
  }

}
