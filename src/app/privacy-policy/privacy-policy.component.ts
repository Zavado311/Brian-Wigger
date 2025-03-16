import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactformComponent } from '../main-content/contactform/contactform.component';
import { PrivacyPolicyInformationsComponent } from './privacy-policy-informations/privacy-policy-informations.component';
import { FooterSubpagesComponent } from "../footer-subpages/footer-subpages.component";



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, ContactformComponent, PrivacyPolicyInformationsComponent, FooterSubpagesComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
