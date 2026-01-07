import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [AppRoutingModule],
})
export class FooterComponent {}
