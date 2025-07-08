import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-average-chart',
  imports: [MatCardModule, NgApexchartsModule],
  templateUrl: './average-chart.component.html',
  styleUrl: './average-chart.component.scss',
})
export class AverageChartComponent implements OnInit {
  energyChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.energyChart();
  }

  private energyChart() {
    this.energyChartOptions = {
      series: [
        {
          name: 'profit',
          data: [250, 470, 310, 449], // Example data
        },
      ],
      chart: {
        type: 'bar',
        height: 250,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: true,
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'], // Example categories
      },
      yaxis: {
        show: true,
      },
      tooltip: {
        theme: 'dark',
      },
      grid: {
        show: false,
      },
    };
  }
}
