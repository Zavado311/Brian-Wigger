import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  title = 'Your Receipt';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}
