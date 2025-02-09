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
  showImageArrow: string = '';

  scrollDownImages: string[] = [
    'arrows/arrowFromRight1.svg',
    'arrows/arrowFromRight2.svg',
    'arrows/arrowFromRight3.svg',
  ];

  @ViewChild('yourElement') yourElement!: ElementRef;

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

  ngOnInit(): void {}

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
