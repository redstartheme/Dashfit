
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-rating-card',
  imports: [MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './rating-card.component.html',
  styleUrl: './rating-card.component.scss',
})
export class RatingCardComponent {
  @Input() ratingData: any;
}
