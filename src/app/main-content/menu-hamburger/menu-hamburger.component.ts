import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-menu-hamburger',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu-hamburger.component.html',
  styleUrl: './menu-hamburger.component.scss',
})
export class MenuHamburgerComponent {
  @Output() callParentFunction = new EventEmitter<void>();

  triggerParentFunction(): void {
    this.callParentFunction.emit();
  }
}
