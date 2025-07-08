import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-attendance-card',
  imports: [MatCardModule, MatButtonModule, NgApexchartsModule],
  templateUrl: './attendance-card.component.html',
  styleUrl: './attendance-card.component.scss',
})
export class AttendanceCardComponent implements OnInit {
  donutChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.donutChart();
  }

  private donutChart() {
    this.donutChartOptions = {
      series: [96.4],
      chart: {
        height: 130,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          track: {
            background: '#f3f6ff',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: ['Progress'],
    };
  }
}
