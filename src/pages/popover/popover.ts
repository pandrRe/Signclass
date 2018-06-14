import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Level } from '../../app/levels-class';

@Component({
    template: `
      <ion-content text-center>
        <h2>Nível {{ selectedLevel.id }}</h2>
        <p>{{ selectedLevel.desc }} </p>
      </ion-content>
    `
  })
  export class PopoverPage {
    public selectedLevel: Level;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.selectedLevel = this.navParams.get('level');
    }
  
    close() {
      this.viewCtrl.dismiss();
    }
  }