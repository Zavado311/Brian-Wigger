import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  
  projects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {

    const rawProjects = [
      {
        photo: 'join/join.svg',
        titleKey: 'PROJECTS.JOIN.TITLE',
        usedProgrammsKey: 'PROJECTS.JOIN.USED_PROGRAMS',
        descriptionKey: 'PROJECTS.JOIN.DESCRIPTION',
        github: '',
        link: '',
      },
      {
        photo: 'elPolloLoco/elPolloLoco.svg',
        titleKey: 'PROJECTS.EL_POLLO_LOCO.TITLE',
        usedProgrammsKey: 'PROJECTS.EL_POLLO_LOCO.USED_PROGRAMS',
        descriptionKey: 'PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
        github: '',
        link: '',
      },
      {
        photo: 'pokedex/pokedex.svg',
        titleKey: 'PROJECTS.POKEDEX.TITLE',
        usedProgrammsKey: 'PROJECTS.POKEDEX.USED_PROGRAMS',
        descriptionKey: 'PROJECTS.POKEDEX.DESCRIPTION',
        github: '',
        link: '',
      },
    ];


    const keys = rawProjects.flatMap(p => [p.titleKey, p.usedProgrammsKey, p.descriptionKey]);

    this.translate.get(keys).subscribe(translations => {
      this.projects = rawProjects.map(p => ({
        photo: p.photo,
        title: translations[p.titleKey] || p.titleKey,
        usedProgramms: translations[p.usedProgrammsKey] || p.usedProgrammsKey,
        description: translations[p.descriptionKey] || p.descriptionKey,
        github: p.github,
        link: p.link,
      }));
    });
  }
}
