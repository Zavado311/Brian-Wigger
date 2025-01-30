import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-arrow.component.html',
  styleUrl: './right-arrow.component.scss',
})
export class RightArrowComponent implements OnInit {
  showImageArrow: string = '';

  scrollDownImages: string[] = [
    'arrows/arrowFromRight1.svg',
    'arrows/arrowFromRight2.svg',
    'arrows/arrowFromRight3.svg',
  ];

  ngOnInit(): void {
    this.startScrollDownAnimation();
  }

  startScrollDownAnimation() {
    let i: number = 0;
    setInterval(() => {
      this.showImageArrow = this.scrollDownImages[i];
      if (i == this.scrollDownImages.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }, 1000);
  }
}
