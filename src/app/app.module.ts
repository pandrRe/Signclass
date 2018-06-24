import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoursePage } from '../pages/course/course';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LevelsPage } from '../pages/levels/levels';
import { PopoverPage } from '../pages/popover/popover';
import { ClassroomPage } from '../pages/classroom/classroom';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContentProvider } from '../providers/content/content';
import { PerformanceProvider } from '../providers/performance/performance';

@NgModule({
  declarations: [
    MyApp,
    CoursePage,
    ProfilePage,
    HomePage,
    TabsPage,
    LevelsPage,
    PopoverPage,
    ClassroomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CoursePage,
    ProfilePage,
    HomePage,
    TabsPage,
    LevelsPage,
    PopoverPage,
    ClassroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentProvider,
    PerformanceProvider
  ]
})
export class AppModule {}
