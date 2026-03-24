import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

interface Testimonial {
  text: string;
  name: string;
  company: string;
  image: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServicesComponent {
  testimonials: Testimonial[] = [
    {
      text: 'Managing security in a hospital is unlike any other environment. Their team understood that — calm under pressure, respectful with patients, and strict at entry points.',
      name: 'Subharti Hospital',
      company: 'Subharti Hospital',
      image: 'assets/images/bouncer.jpeg',
    },
    // {
    //   text: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak.",
    //   name: 'Max Conversion',
    //   company: 'LittleSnippets.net',
    //   image:
    //     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
    // },
  ];
}
