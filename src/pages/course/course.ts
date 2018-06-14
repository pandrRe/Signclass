import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LevelsPage } from '../levels/levels';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  constructor(public navCtrl: NavController) {

  }

  navigate(course): void {
      this.navCtrl.push(LevelsPage, {
        course: course
      });
  }

}
