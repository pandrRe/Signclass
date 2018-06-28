import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { PerformanceProvider } from '../../providers/performance/performance';
import { ContentProvider } from '../../providers/content/content';

import { Level } from '../../app/levels-class';

@IonicPage()
@Component({
  selector: 'page-level-perf',
  templateUrl: 'level-perf.html',
})
export class LevelPerfPage {
  courseInfo: any;
  course: Level[];
  levelPerfs: Object[] = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private perf: PerformanceProvider,
    public content: ContentProvider
  ) {}

  ionViewWillLoad(): void {
    this.courseInfo = this.navParams.get('info');
    this.content.getCourse(this.courseInfo.courseId).subscribe(
      course => this.course = course,
      error => console.log(error),
      () => this.setPerfs()
    );
  }

  goBack(): void {
    this.navCtrl.pop();
  }

  setPerfs(): void {
    for(let level of this.course) {
      this.getLevelPerf(level.id);
    }
    console.log(this.levelPerfs);
  }

  getLevelPerf(levelId: number): void {
    this.perf.getPerformance(this.courseInfo.courseId, levelId).then(
      (perf: string) => {
        if (perf != null) {
          this.levelPerfs.push(JSON.parse(perf));
        }
        else {
          this.levelPerfs.push(perf);
        }
      });
  }

}
