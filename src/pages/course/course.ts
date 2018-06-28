import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentProvider } from '../../providers/content/content';

import { LevelsPage } from '../levels/levels';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {
  coursesInfo: Object;

  constructor(public navCtrl: NavController, private content: ContentProvider) {

  }

  ionViewCanEnter(): void {
    this.content.getInfo().subscribe(
      info => this.coursesInfo = info
    )
  }

  navigate(course: number, courseName: string): void {
    this.content.courseId = course;
    this.navCtrl.push(LevelsPage, {
      course: courseName
    });
  }

}
