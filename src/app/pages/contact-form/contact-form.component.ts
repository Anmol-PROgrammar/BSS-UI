import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]], // must not be empty
      EmailId: ['', [Validators.required, Validators.email]], // required + valid email format
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ], // 10‑digit phone
      Message: ['', [Validators.required, Validators.minLength(10)]], // at least 10 chars
      Consent: [false, Validators.requiredTrue], // must be checked
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value); // Form values on submission
    } else {
      console.log('Form is invalid.');
    }
  }
}
