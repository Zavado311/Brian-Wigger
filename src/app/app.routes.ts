import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './main-content/legal-notice/legal-notice.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'legal',
    component: LegalNoticeComponent,
  },
];
