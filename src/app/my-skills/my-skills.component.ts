import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  mySkills: any = [
    { path: 'angular.svg', name: 'Angular' },
    { path: 'typescript.svg', name: 'TypeScript' },
    { path: 'javascript.svg', name: 'JavaScript' },
    { path: 'html.svg', name: 'HTML' },
    { path: 'css.svg', name: 'CSS' },
    { path: 'firebase.svg', name: 'Firebase' },
    { path: 'git.svg', name: 'Git' },
    { path: 'scrum.svg', name: 'Scrum' },
    { path: 'restapi.svg', name: 'Rest Api' },
    { path: 'materialdesign.svg', name: 'Material Design' },
  ];
}
