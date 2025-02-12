import { Component } from '@angular/core';
import { MenuHamburgerComponent } from '../../main-content/menu-hamburger/menu-hamburger.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuHamburgerComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private openMenuIntervalId: any;
  private closeMenuIntervalId: any;

  showHamburger: string = 'hamburger/hamburger.svg';
  playedAnimation: boolean = false;

  menuImages: string[] = [
    'hamburger/hamburger.svg',
    'hamburger/hamburger2.svg',
    'hamburger/hamburger3.svg',
    'hamburger/hamburger4.svg',
    'hamburger/hamburger5.svg',
  ];

  openMenu: boolean = false;

  showMenu() {
    this.openMenu = true;
    document.body.style.overflow = 'hidden';
    this.hamburgerAnimation();
  }

  closeMenu() {
    this.openMenu = false;
    document.body.style.overflow = '';
    this.hamburgerAnimationClose();
  }

  hamburgerAnimationClose() {
    let i: number = this.menuImages.length - 1;
    if (!this.openMenu) {
      this.closeMenuIntervalId = setInterval(() => {
        this.showHamburger = this.menuImages[i];
        if (i == 0) {
          this.playedAnimation = false;
          clearInterval(this.closeMenuIntervalId);
          this.showHamburger = 'hamburger/hamburger.svg';
        } else if (this.playedAnimation) {
          i--;
        }
      }, 30);
    }
  }

  hamburgerAnimation() {
    let i: number = 0;
    if (!this.playedAnimation) {
      this.openMenuIntervalId = setInterval(() => {
        this.showHamburger = this.menuImages[i];
        if (i == this.menuImages.length - 1) {
          this.playedAnimation = true;
          clearInterval(this.openMenuIntervalId);
        } else if (!this.playedAnimation) {
          i++;
        }
      }, 30);
    }
  }
}
