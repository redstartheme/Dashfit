import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series2?: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  responsive?: ApexResponsive[];
  legend: ApexLegend;
  labels?: string[];
};

@Component({
  selector: 'app-chart-card3',
  imports: [MatCardModule, NgApexchartsModule, MatIconModule, CommonModule],
  templateUrl: './chart-card3.component.html',
  styleUrl: './chart-card3.component.scss',
})
export class ChartCard3Component {
  public pieChartOptions!: Partial<ChartOptions>;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  items;
  constructor() {
    this.chart();

    this.items = [
      { title: 'Mobile', count: 23, change: 32, color: '#00bcd4' },
      { title: 'Smart Watch', count: 32, change: 12, color: '#3f51b5' },
      { title: 'Laptop', count: 12, change: -12, color: '#ff9800' },
      { title: 'Tablet', count: 18, change: 14, color: '#43e496' },
    ];
  }

  private chart() {
    this.pieChartOptions = {
      series2: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        width: 220,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Fever', 'Cholera', 'Typhoid', 'Infection', 'Malaria'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
}
