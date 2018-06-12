import { Component } from '@angular/core';

import { CoursePage } from '../course/course';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoursePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
