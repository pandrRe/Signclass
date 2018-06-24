import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

import { Level } from '../../app/levels-class';
import { ClassroomPage } from '../classroom/classroom';

@Component({
    template: `
      <ion-content text-center>
        <h2>Nível {{ selectedLevel.id }}</h2>
        <p>{{ selectedLevel.desc }} </p>
        <button ion-button (click)="gotoClass()">IR</button>
      </ion-content>
    `
  })
  export class PopoverPage {
    public selectedLevel: Level;

    constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
      this.selectedLevel = this.navParams.get('level');
    }
  
    close(): void {
      this.viewCtrl.dismiss();
    }

    gotoClass(): void {
      this.close();
      this.navCtrl.push(ClassroomPage, {
        levelId: this.selectedLevel.id
      });
    }
  }