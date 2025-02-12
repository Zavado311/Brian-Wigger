import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-reference-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-box.component.html',
  styleUrl: './reference-box.component.scss',
})
export class ReferenceBoxComponent {
  @Input() reference!: {
    autor: string;
    enterprise: string;
    feedback: string;
  };
}
