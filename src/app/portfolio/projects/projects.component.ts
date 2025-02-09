import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
mouseOnProject = false;


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


showInformations() {
  this.mouseOnProject = true;
  
}
  
hideInformations() {
  this.mouseOnProject = false;

}

}
