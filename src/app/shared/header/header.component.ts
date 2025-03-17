import { Component, OnInit } from '@angular/core';
import { MenuHamburgerComponent } from '../../main-content/menu-hamburger/menu-hamburger.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuHamburgerComponent, CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  languageDE: boolean = true;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    let savedLang = localStorage.getItem('languageDE');
    if (savedLang) {
      let parsedLang = JSON.parse(savedLang);
      this.switchLanguage(parsedLang);
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    if (lang == 'de') {
      this.languageDE = true;
      localStorage.setItem('languageDE', JSON.stringify(true));
    } else {
      this.languageDE = false;
      localStorage.setItem('languageDE', JSON.stringify(false));
    }
  }

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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
