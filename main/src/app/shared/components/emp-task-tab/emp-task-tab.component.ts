import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

export interface Task {
  name: string;
  status: string;
  statusClass: string;
  manager: string;
  progress: number;
  progressBarClass: string;
}

export interface Employee {
  name: string;
  imgUrl: string;
  tasks: Task[];
}

@Component({
  selector: 'app-emp-task-tab',
  imports: [
    MatTabsModule,
    NgClass,
    MatTableModule,
    CommonModule,
    MatProgressBarModule,
  ],
  templateUrl: './emp-task-tab.component.html',
  styleUrl: './emp-task-tab.component.scss',
})
export class EmpTaskTabComponent {
  @Input() employees: Employee[] = [];
  displayedColumns: string[] = ['task', 'status', 'manager', 'progress'];

  trackEmployee(index: number, employee: any): number {
    return employee.name ? employee.name : index;
  }

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
