import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-left-arrow',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './left-arrow.component.html',
  styleUrl: './left-arrow.component.scss',
})
export class LeftArrowComponent implements AfterViewInit {
  showImageArrow: string = 'arrows/arrowFromLeft1.svg';
  playedAnimation: boolean = false;
  private arrowAnimationIntervalId: any;

  scrollDownImages: string[] = [
    'arrows/arrowFromLeft1.svg',
    'arrows/arrowFromLeft2.svg',
    'arrows/arrowFromLeft3.svg',
  ];

  @ViewChild('targetImage') yourElement!: ElementRef;

  ngAfterViewInit() {
    const threshold = 0.2; // how much % of the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startScrollDownAnimation();

            observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
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
