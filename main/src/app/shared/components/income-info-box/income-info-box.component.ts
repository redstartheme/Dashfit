import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-income-info-box',
  imports: [MatCardModule, CommonModule, MatProgressBarModule],
  templateUrl: './income-info-box.component.html',
  styleUrl: './income-info-box.component.scss',
})
export class IncomeInfoBoxComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() value: string | number = '';
  @Input() valueClass: string = ''; // e.g., 'text-info' or 'text-danger'
  @Input() progress: number = 0; // Progress percentage
  @Input() progressClass: string = ''; // e.g., 'l-bg-purple'
  @Input() change: string = ''; // Change percentage or value

  getProgressBarColor(value: number): string {
    if (value < 50) {
      return 'warn';
    } else if (value >= 50 && value <= 70) {
      return 'accent';
    } else {
      return 'primary';
    }
  }
}
