import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  list: any = [
    { text: 'Highly trained & vetted professionals' },
    { text: '24/7 availability with rapid response' },
    { text: 'Focused on hospitals & educational institutions' },
    { text: 'Commitment to integrity & client peace of mind' },
  ];
}
