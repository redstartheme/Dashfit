
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface RatingItem {
  label: string;
  rating: number;
}

@Component({
  selector: 'app-rating-widget',
  imports: [MatCardModule],
  templateUrl: './rating-widget.component.html',
  styleUrl: './rating-widget.component.scss',
})
export class RatingWidgetComponent {
  @Input() totalReviews: number = 0;
  @Input() overallRating: number = 0;

  @Input() ratingItems: RatingItem[] = [];

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
