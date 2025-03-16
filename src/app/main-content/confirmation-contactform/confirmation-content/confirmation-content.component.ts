import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-content',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './confirmation-content.component.html',
  styleUrl: './confirmation-content.component.scss'
})
export class ConfirmationContentComponent {

}
