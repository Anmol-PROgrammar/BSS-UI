import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ContactApiService,
  ContactFormData,
} from '../../services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  registrationForm: FormGroup;
  isLoading = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private fb: FormBuilder,
    private contactApiService: ContactApiService,
  ) {
    this.registrationForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      EmailId: ['', [Validators.required, Validators.email]],
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      Message: ['', [Validators.required, Validators.minLength(10)]],
      Consent: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    // Reset states
    this.submitSuccess = false;
    this.submitError = '';

    // Mark all fields as touched to show validation errors
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.valid) {
      this.isLoading = true;

      const formData: ContactFormData = this.registrationForm.value;

      this.contactApiService.submitContactForm(formData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.submitSuccess = true;
          this.registrationForm.reset();

          // Optional: Reset form state
          Object.keys(this.registrationForm.controls).forEach((key) => {
            this.registrationForm.get(key)?.setErrors(null);
          });
        },
        error: (error) => {
          this.isLoading = false;
          this.submitError = error.message || 'Failed to submit form';
          console.error('Submission error:', error);
        },
      });
    } else {
      console.log('Form is invalid.');
    }
  }
}
