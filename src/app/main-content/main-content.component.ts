import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LeftArrowComponent } from '../shared/left-arrow/left-arrow.component';
import { RightArrowComponent } from '../shared/right-arrow/right-arrow.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    LeftArrowComponent,
    RightArrowComponent,
    MySkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    AboutMeComponent,
    ContactformComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
