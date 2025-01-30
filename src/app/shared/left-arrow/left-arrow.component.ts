import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-arrow',
  standalone: true,
  imports: [],
  templateUrl: './left-arrow.component.html',
  styleUrl: './left-arrow.component.scss',
})
export class LeftArrowComponent implements OnInit {
  showImageArrow: string = '';

  scrollDownImages: string[] = [
    'arrows/arrowFromLeft1.svg',
    'arrows/arrowFromLeft2.svg',
    'arrows/arrowFromLeft3.svg',
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
