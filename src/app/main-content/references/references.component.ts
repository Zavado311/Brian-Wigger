import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBoxComponent } from './reference-box/reference-box.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceBoxComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedback: `Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
    },
    {
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedback: `Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
    },
    {
      autor: 'V. Schuster',
      enterprise: 'Team Partner',
      feedback: `Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
    },
  ];
}
