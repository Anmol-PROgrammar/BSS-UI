// contact-form.component.ts
import { Component, OnDestroy } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnDestroy {
  registrationForm: FormGroup;
  isLoading = false;
  submitSuccess = false;
  submitError = '';

  private apiSubscription?: Subscription;

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

      // Unsubscribe from any previous subscription
      if (this.apiSubscription) {
        this.apiSubscription.unsubscribe();
      }

      this.apiSubscription = this.contactApiService
        .submitContactForm(formData)
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.submitSuccess = true;
            this.registrationForm.reset();

            // Reset form errors
            Object.keys(this.registrationForm.controls).forEach((key) => {
              this.registrationForm.get(key)?.setErrors(null);
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
              this.submitSuccess = false;
            }, 5000);
          },
          error: (error) => {
            this.isLoading = false;
            this.submitError =
              error.message || 'Failed to submit form. Please try again.';

            // Auto-hide error message after 5 seconds
            setTimeout(() => {
              this.submitError = '';
            }, 5000);

            console.error('Submission error:', error);
          },
        });
    }
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }
}
