import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Level } from '../../app/levels-class';
import { LEVELS } from '../../app/mock-levels';

@IonicPage({
    name: 'levels'
})
@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html',
})
export class LevelsPage {

  public course: string;
  public levels: Level[] = LEVELS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelsPage');
    this.course = this.navParams.get('course');
  }

}
