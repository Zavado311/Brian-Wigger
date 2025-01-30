import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RightArrowComponent } from './shared/right-arrow/right-arrow.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { LeftArrowComponent } from './shared/left-arrow/left-arrow.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    RightArrowComponent,
    MySkillsComponent,
    LeftArrowComponent,
    PortfolioComponent,
    AboutMeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}
