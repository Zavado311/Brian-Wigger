import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-subpages',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer-subpages.component.html',
  styleUrl: './footer-subpages.component.scss'
})
export class FooterSubpagesComponent {

}