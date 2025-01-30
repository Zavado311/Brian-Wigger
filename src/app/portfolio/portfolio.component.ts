import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      photo: '',
      title: 'Join',
      usedProgramms: 'JavaScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      github: '',
      link: '',
    },
    {
      photo: '',
      title: '¡El Pollo Loco!',
      usedProgramms: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      github: '',
      link: '',
    },
    {
      photo: '',
      title: 'Pokédex',
      usedProgramms: 'JavaScript | HTML | CSS | API',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information. ',
      github: '',
      link: '',
    },
  ];
}
