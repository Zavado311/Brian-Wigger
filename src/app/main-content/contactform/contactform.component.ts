import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements OnInit {
  checkboxChecked: boolean = false;
  ImageOfCheckbox: string = '';
  mailTest = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  constructor(private _router: Router) {}
  onBack(): void {
    this._router.navigate(['/confirmation']);
  }

  ngOnInit(): void {
    this.changeImageOfCheckbox();
  }

  setCheckbox() {
    if (this.checkboxChecked) {
      this.checkboxChecked = false;
      this.contactData.checkbox = !this.contactData.checkbox;
    } else {
      this.checkboxChecked = true;
      this.contactData.checkbox = !this.contactData.checkbox;
    }
    this.changeImageOfCheckbox();
  }

  changeImageOfCheckbox() {
    if (!this.checkboxChecked) {
      this.ImageOfCheckbox = '/assets/img/checkboxWhite.svg';
    } else {
      this.ImageOfCheckbox = '/assets/img/checkboxChecked.svg';
    }
  }

  post = {
    endPoint: 'https://brianwigger.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.ImageOfCheckbox = '';
            this.checkboxChecked = false;
            this.contactData.email = '';
            this.ImageOfCheckbox = '/assets/img/checkboxWhite.svg';
            this._router.navigate(['/confirmation']);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
      this.ImageOfCheckbox = '';
      this.checkboxChecked = false;
      this.contactData.email = '';
      this.ImageOfCheckbox = '/assets/img/checkboxWhite.svg';
      this._router.navigate(['/confirmation']);
    }
  }
}
