import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-right-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-arrow.component.html',
  styleUrl: './right-arrow.component.scss',
})
export class RightArrowComponent implements AfterViewInit {
  showImageArrow: string = 'arrows/arrowFromRight1.svg';
  playedAnimation: boolean = false;
  private arrowAnimationIntervalId: any;

  scrollDownImages: string[] = [
    'arrows/arrowFromRight1.svg',
    'arrows/arrowFromRight2.svg',
    'arrows/arrowFromRight3.svg',
  ];

  @ViewChild('targetImage') yourElement!: ElementRef;

  ngAfterViewInit() {
    const threshold = 0.2;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startScrollDownAnimation();

            observer.disconnect();
          }
        });
      },
      { threshold }
    );
    observer.observe(this.yourElement.nativeElement);
  }

  startScrollDownAnimation() {
    let i: number = 0;
    if (!this.playedAnimation) {
      this.arrowAnimationIntervalId = setInterval(() => {
        this.showImageArrow = this.scrollDownImages[i];
        if (i == this.scrollDownImages.length - 1) {
          i = 0;
          clearInterval(this.arrowAnimationIntervalId);
        } else if (!this.playedAnimation) {
          i++;
        }
      }, 500);
    }
  }
}
