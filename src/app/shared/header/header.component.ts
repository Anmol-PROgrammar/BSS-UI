import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AppRoutingModule],
})
export class HeaderComponent {}
