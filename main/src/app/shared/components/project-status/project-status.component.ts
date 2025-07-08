
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export interface Project {
  name: string;
  progress: number;
  progressColor: string;
}

@Component({
  selector: 'app-project-status',
  imports: [MatProgressBarModule],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.scss',
})
export class ProjectStatusComponent {
  @Input() projects: Project[] = [];

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
