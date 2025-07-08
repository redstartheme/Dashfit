import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-availability-card',
  imports: [MatCardModule, CommonModule],
  templateUrl: './availability-card.component.html',
  styleUrl: './availability-card.component.scss',
})
export class AvailabilityCardComponent {
  @Input() occupied: number = 125;
  @Input() reserved: number = 87;
  @Input() available: number = 57;
  @Input() notReady: number = 25;

  // Calculate the total number of rooms
  get total(): number {
    return this.occupied + this.reserved + this.available + this.notReady;
  }

  // Calculate the percentage for each type
  get occupiedPercentage(): number {
    return (this.occupied / this.total) * 100;
  }

  get reservedPercentage(): number {
    return (this.reserved / this.total) * 100;
  }

  get availablePercentage(): number {
    return (this.available / this.total) * 100;
  }

  get notReadyPercentage(): number {
    return (this.notReady / this.total) * 100;
  }
}
