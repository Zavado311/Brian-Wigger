import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements OnInit {
  checkboxChecked: boolean = false;
  ImageOfCheckbox: string = '';
  mailTest = true;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

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
      this.ImageOfCheckbox = './../../assets/img/checkboxWhite.svg';
    } else {
      this.ImageOfCheckbox = './../../assets/img/checkboxChecked.svg';
    }
  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
