import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-schedule-card',
  imports: [NgClass],
  templateUrl: './schedule-card.component.html',
  styleUrl: './schedule-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleCardComponent {
  @Input()
  schedules: Array<{
    title: string;
    dateRange: string;
    statusClass: string;
  }> = [];
}
