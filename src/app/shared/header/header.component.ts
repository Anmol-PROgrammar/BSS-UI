import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AppRoutingModule, CommonModule],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  toggleNavLinks() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
