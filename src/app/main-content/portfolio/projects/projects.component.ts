import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
mouseOnProject = false;

ngOnInit(): void {
  this.checkScreenSize();
}

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1440) {
      this.showInformations();
    }
  }

showInformations() {
  this.mouseOnProject = true;
  
}
  
hideInformations() {
  this.mouseOnProject = false;

}

}
