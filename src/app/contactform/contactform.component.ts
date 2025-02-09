import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements OnInit {
  checkboxChecked: boolean = false;
  ImageOfCheckbox: string = '';

  ngOnInit(): void {
    this.changeImageOfCheckbox();
  }

  setCheckbox() {
    if (this.checkboxChecked) {
      this.checkboxChecked = false;
    } else {
      this.checkboxChecked = true;
    }
    this.changeImageOfCheckbox();
  }

  changeImageOfCheckbox() {
    if (!this.checkboxChecked) {
      this.ImageOfCheckbox = './../../assets/img/checkboxWhite.svg';
    } else {
      this.ImageOfCheckbox = './../../assets/img/checkboxChecked.svg';
    }
  }
}
