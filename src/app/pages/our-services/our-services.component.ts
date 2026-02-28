import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  name: string;
  company: string;
  image: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  testimonials: Testimonial[] = [
    {
      text: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak.",
      name: 'Pelican Steve',
      company: 'LittleSnippets.net',
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
    },
    {
      text: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak.",
      name: 'Max Conversion',
      company: 'LittleSnippets.net',
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
    },
  ];
}
