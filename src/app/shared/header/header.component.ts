import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, AppRoutingModule],
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
    this.isMenuOpen = false;
  }

  toggleNavLinks() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
