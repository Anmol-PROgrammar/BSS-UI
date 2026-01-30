import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface ContactFormData {
  FullName: string;
  EmailId: string;
  PhoneNumber: string;
  Message: string;
  Consent: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  // API endpoints from environment
  private readonly CONTACT_ENDPOINT = 'http://localhost:5000/send-email';

  constructor(private http: HttpClient) {}

  /**
   * Submit contact form data
   * POST /api/contact/submit
   */
  submitContactForm(formData: ContactFormData): Observable<any> {
    // Always validate before sending
    if (!this.validateFormData(formData)) {
      return throwError(() => new Error('Invalid form data'));
    }

    return this.http
      .post(this.CONTACT_ENDPOINT, formData)
      .pipe(catchError(this.handleError));
  }

  /**
   * Basic validation before API call
   */
  private validateFormData(data: ContactFormData): boolean {
    return !!(
      data.FullName?.trim() &&
      data.EmailId?.trim() &&
      data.PhoneNumber?.trim() &&
      data.Message?.trim() &&
      data.Consent === true
    );
  }

  /**
   * Centralized error handler
   */
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);

    // User-friendly error messages
    let errorMessage = 'Something went wrong. Please try again.';

    if (error.status === 0) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error.status === 400) {
      errorMessage = 'Invalid data. Please check your inputs.';
    } else if (error.status === 401) {
      errorMessage = 'Unauthorized access.';
    } else if (error.status === 500) {
      errorMessage = 'Server error. Please try again later.';
    }

    return throwError(() => new Error(errorMessage));
  }
}
