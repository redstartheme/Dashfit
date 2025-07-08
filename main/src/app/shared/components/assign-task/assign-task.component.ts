
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';

interface Task {
  userImage: string;
  userName: string;
  taskDetails: string;
  status: string;
  statusClass: string;
  manager: string;
  progress: number;
  progressClass: string;
}

@Component({
  selector: 'app-assign-task',
  imports: [MatTableModule, MatProgressBarModule],
  templateUrl: './assign-task.component.html',
  styleUrl: './assign-task.component.scss',
})
export class AssignTaskComponent {
  @Input() tasks: Task[] = [];

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
