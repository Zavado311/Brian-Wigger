import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LegalNoticeInformationComponent } from './legal-notice-information/legal-notice-information.component';
import { ContactformComponent } from '../contactform/contactform.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    HeaderComponent,
    LegalNoticeInformationComponent,
    ContactformComponent,
    FooterComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}
