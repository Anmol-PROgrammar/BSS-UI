import { Component } from '@angular/core';
import { initScrollAnimations } from '../../../utils/animations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ngAfterViewInit(): void {
    initScrollAnimations();
  }
}
