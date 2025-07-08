
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
  iconColor: string;
}

@Component({
  selector: 'app-testimonial',
  imports: [MatCardModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sapiente voluptatum minus atque quod, consequatur, qui sit perferendis eligendi est illum saepe! Voluptatibus ex magni ipsam dignissimos distinctio, odit expedita?',
      name: 'John Doe',
      position: 'CEO',
      avatar: 'assets/images/avatars/avatar-4.jpg',
      rating: 4.5,
      iconColor: 'text-green',
    },
    {
      quote:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sapiente voluptatum minus atque quod, consequatur, qui sit perferendis eligendi est illum saepe! Voluptatibus ex magni ipsam dignissimos distinctio, odit expedita?',
      name: 'Airi Satou',
      position: 'Director',
      avatar: 'assets/images/avatars/avatar-8.jpg',
      rating: 3,
      iconColor: 'text-blue',
    },
    {
      quote:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sapiente voluptatum minus atque quod, consequatur, qui sit perferendis eligendi est illum saepe! Voluptatibus ex magni ipsam dignissimos distinctio, odit expedita?',
      name: 'Cara Stevens',
      position: 'Doctor',
      avatar: 'assets/images/avatars/avatar-2.jpg',
      rating: 4.5,
      iconColor: 'text-orange',
    },
    {
      quote:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sapiente voluptatum minus atque quod, consequatur, qui sit perferendis eligendi est illum saepe! Voluptatibus ex magni ipsam dignissimos distinctio, odit expedita?',
      name: 'Jacob Ryan',
      position: 'Nurse',
      avatar: 'assets/images/avatars/avatar-1.jpg',
      rating: 3.5,
      iconColor: 'text-purple',
    },
  ];

  getStarIcons(rating: number): string[] {
    const stars: string[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('star');
      } else if (i - 0.5 <= rating) {
        stars.push('star_half');
      } else {
        stars.push('star_outline');
      }
    }
    return stars;
  }
}
