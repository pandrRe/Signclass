import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ContentProvider } from '../../providers/content/content';

import { Level } from '../../app/levels-class';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html'
})
export class LevelsPage {

  public course: string;
  public levels: Level[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public popCtrl: PopoverController,
      private content: ContentProvider
    ) {}

  ionViewDidLoad() {
    this.course = this.navParams.get('course');

    this.getLevels();
  }

  openPop(ev, level: Level): void {
    let popover = this.popCtrl.create(PopoverPage, {level: level});
    popover.present({
        ev: ev
    });
  }

  getLevels(): void {
    this.content.getCourse(this.content.courseId)
        .subscribe(levels => { this.levels = levels } );
  }

}
