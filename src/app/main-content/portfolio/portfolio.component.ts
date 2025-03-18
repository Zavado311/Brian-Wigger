import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: any[] = [];

  private rawProjects = [
    {
      photo: 'join/join.png',
      titleKey: 'PROJECTS.JOIN.TITLE',
      usedProgrammsKey: 'PROJECTS.JOIN.USED_PROGRAMS',
      descriptionKey: 'PROJECTS.JOIN.DESCRIPTION',
      github: 'https://github.com/Paul-Ja82/Join',
      link: '/join/log_in.html',
    },
    {
      photo: 'elPolloLoco/elPolloLoco.svg',
      titleKey: 'PROJECTS.EL_POLLO_LOCO.TITLE',
      usedProgrammsKey: 'PROJECTS.EL_POLLO_LOCO.USED_PROGRAMS',
      descriptionKey: 'PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
      github: 'https://github.com/Zavado311/El-Pollo-Loco',
      link: '/elpolloloco',
    },
    {
      photo: 'pokedex/pokedex.png',
      titleKey: 'PROJECTS.POKEDEX.TITLE',
      usedProgrammsKey: 'PROJECTS.POKEDEX.USED_PROGRAMS',
      descriptionKey: 'PROJECTS.POKEDEX.DESCRIPTION',
      github: 'https://github.com/Zavado311/Pokedex',
      link: '/pokedex',
    },
  ];

  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.updateTranslations();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.updateTranslations();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updateTranslations(): void {
    const keys = this.rawProjects.flatMap((p) => [
      p.titleKey,
      p.usedProgrammsKey,
      p.descriptionKey,
    ]);

    this.translate.stream(keys).subscribe((translations) => {
      this.projects = this.rawProjects.map((p) => ({
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
