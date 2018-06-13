import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  constructor(public navCtrl: NavController) {

  }

  navigate(page: string, course: string): void {
      this.navCtrl.push(page, {
        course: course
      });
  }

}
