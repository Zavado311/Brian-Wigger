import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBoxComponent } from './reference-box/reference-box.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceBoxComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      autor: 'A. Pawlik',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_1'
    },
    {
      autor: 'R. Punto',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_2'
    },
    {
      autor: 'P. Dietrich',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_3'
    }
  ];
}
