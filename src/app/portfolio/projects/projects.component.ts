import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  @Input() project!: {
    photo: string;
    title: string;
    usedProgramms: string;
    description: string;
    github: string;
    link: string;
  };
  @Input() reversed!: boolean; 
  @Input() number!: number; 
  @Input() projects: any[] = [];
  @Input() length!: number; 



  

}
