import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ConfirmationContentComponent } from './confirmation-content/confirmation-content.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FooterSubpagesComponent } from "../../footer-subpages/footer-subpages.component";

@Component({
  selector: 'app-confirmation-contactform',
  standalone: true,
  imports: [HeaderComponent, ConfirmationContentComponent,FooterSubpagesComponent],
  templateUrl: './confirmation-contactform.component.html',
  styleUrl: './confirmation-contactform.component.scss'
})
export class ConfirmationContactformComponent {

}
