import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelPerfPage } from './level-perf';

@NgModule({
  declarations: [
    LevelPerfPage,
  ],
  imports: [
    IonicPageModule.forChild(LevelPerfPage),
  ],
})
export class LevelPerfPageModule {}
