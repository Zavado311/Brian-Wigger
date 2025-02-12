import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  showImage: string = '';

  scrollDownImages: string[] = [
    'scrollDownAnimation/scrolldown1.png',
    'scrollDownAnimation/scrolldown2.png',
    'scrollDownAnimation/scrolldown3.png',
    'scrollDownAnimation/scrolldown4.png',
    'scrollDownAnimation/scrolldown5.png',
    'scrollDownAnimation/scrolldown6.png',
    'scrollDownAnimation/scrolldown7.png',
  ];

  ngOnInit(): void {
    this.startScrollDownAnimation();
  }

  startScrollDownAnimation() {
    let i: number = 0;
    setInterval(() => {
      this.showImage = this.scrollDownImages[i];
      if (i == this.scrollDownImages.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }, 250);
  }
}
