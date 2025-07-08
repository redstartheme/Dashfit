
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-booking-average',
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './booking-average.component.html',
  styleUrl: './booking-average.component.scss',
})
export class BookingAverageComponent {
  @Input() bookingData: Array<any> = [];
}
