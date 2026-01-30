import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-quick-access-btn',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './quick-access-btn.component.html',
  styleUrls: ['./quick-access-btn.component.scss'],
})
export class QuickAccessBtnComponent {
  windowScrolled: boolean = false;
  isFormPage: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isFormPage = event.url === '/form';
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.windowScrolled = window.scrollY > 600;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToForm(): void {
    this.router.navigate(['/form']);
  }
}
