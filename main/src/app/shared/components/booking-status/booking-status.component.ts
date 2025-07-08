import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-booking-status',
  imports: [MatCardModule],
  templateUrl: './booking-status.component.html',
  styleUrl: './booking-status.component.scss',
})
export class BookingStatusComponent {
  @Input() totalBookings: number = 0;
  @Input() checkedIn: number = 0;
  @Input() checkedOut: number = 0;
}
