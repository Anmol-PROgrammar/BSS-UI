import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { initScrollAnimations } from '../../../utils/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  list = [
    {
      text: 'Punctual, uniformed guards on every shift — no delays, no excuses.',
    },
    { text: 'Rigorous screening and training before deployment.' },
    { text: 'On-site supervisors ensuring discipline and performance.' },
    { text: 'Quick replacement policy — zero gaps in your coverage.' },
    { text: 'Regular client feedback loops to stay accountable.' },
    { text: 'Zero-tolerance policy for negligence or misconduct.' },
  ];

  ngAfterViewInit(): void {
    initScrollAnimations();
  }
}
