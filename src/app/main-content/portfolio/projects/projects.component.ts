import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  mouseOnProject = false;

  ngOnInit(): void {
    this.setDesign();
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
    this.setDesign();
  }

  setDesign(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1450) {
      this.mouseOnProject = true;
    }
  }

  showInformations() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1450) {
      this.mouseOnProject = true;
    }
  }

  hideInformations() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1450) {
      this.mouseOnProject = false;
    }
  }
}
