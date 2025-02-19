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
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_1'
    },
    {
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_2'
    },
    {
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedbackKey: 'REFERENCES.FEEDBACKS.REFERENCE_3'
    }
  ];
}
