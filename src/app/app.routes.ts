import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './main-content/legal-notice/legal-notice.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent, pathMatch: 'full' 
  },
  {
    path: 'legal',
    component: LegalNoticeComponent,
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent,
  },
];
