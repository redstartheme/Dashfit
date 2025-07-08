import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  MatProgressBarModule,
  ProgressBarMode,
} from '@angular/material/progress-bar';

@Component({
  selector: 'app-report-card-widget',
  imports: [MatProgressBarModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './report-card-widget.component.html',
  styleUrl: './report-card-widget.component.scss',
})
export class ReportCardWidgetComponent {
  @Input() todayCount: number = 0;
  @Input() weekCount: number = 0;
  @Input() monthCount: number = 0;
  @Input() progressPercentage: number = 0;
  @Input() progressColor: string = 'orange';
  @Input() heading: string = 'Patient Report';

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

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
