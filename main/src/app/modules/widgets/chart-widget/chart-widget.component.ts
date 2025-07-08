import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexPlotOptions,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexGrid,
  ApexMarkers,
} from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { AttendanceChartComponent } from '@shared/components/attendance-chart/attendance-chart.component';
import { ChartCard4Component } from '@shared/components/chart-card4/chart-card4.component';
import { IncomeInfoBoxComponent } from '@shared/components/income-info-box/income-info-box.component';
import { OrderInfoBoxComponent } from '@shared/components/order-info-box/order-info-box.component';
import { StatisticCard1Component } from '@shared/components/statistic-card1/statistic-card1.component';
import { StatisticCard2Component } from '@shared/components/statistic-card2/statistic-card2.component';
import { InfoBox2Component } from '@shared/components/info-box2/info-box2.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { FeatherModule } from 'angular-feather';
import { InfoBox1Component } from '@shared/components/info-box1/info-box1.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { ChartCard1Component } from '@shared/components/chart-card1/chart-card1.component';
import { ChartCard2Component } from '@shared/components/chart-card2/chart-card2.component';
import { ChartCard3Component } from '@shared/components/chart-card3/chart-card3.component';
import { SmallCardChartComponent } from '@shared/components/small-card-chart/small-card-chart.component';
import { ChartCard5Component } from '@shared/components/chart-card5/chart-card5.component';
import { AverageChartComponent } from '@shared/components/average-chart/average-chart.component';
import { InfoBox3Component } from '@shared/components/info-box3/info-box3.component';
import { MatIconModule } from '@angular/material/icon';

export type circleChartOptions = {
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  labels?: string[];
  colors?: string[];
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  responsive: ApexResponsive[];
};
export type radarChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  title?: ApexTitleSubtitle;
  stroke?: ApexStroke;
  fill?: ApexFill;
  markers?: ApexMarkers;
  xaxis?: ApexXAxis;
};
export type areaChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  grid?: ApexGrid;
  tooltip?: ApexTooltip;
  legend?: ApexLegend;
  dataLabels?: ApexDataLabels;
};
export type pieChartOptions = {
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  legend?: ApexLegend;
  dataLabels?: ApexDataLabels;
  responsive?: ApexResponsive[];
  labels?: string[];
};
export type avgLecChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  dataLabels?: ApexDataLabels;
  markers?: ApexMarkers;
  colors?: string[];
  yaxis?: ApexYAxis;
  grid?: ApexGrid;
  tooltip?: ApexTooltip;
  legend?: ApexLegend;
  fill?: ApexFill;
  title?: ApexTitleSubtitle;
};
export type ChartOptions = {
  series: ApexAxisChartSeries;
  pieSeries?: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  labels: string[];
  markers: ApexMarkers;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  imports: [
    PageHeaderComponent,
    NgApexchartsModule,
    MatCardModule,
    FeatherModule,
    MatProgressBarModule,
    MatButtonModule,
    StatisticCard1Component,
    OrderInfoBoxComponent,
    MatIconModule,
    IncomeInfoBoxComponent,
    StatisticCard2Component,
    AttendanceChartComponent,
    ChartCard4Component,
    InfoBox2Component,
    InfoBox1Component,
    ChartCard1Component,
    ChartCard2Component,
    ChartCard3Component,
    SmallCardChartComponent,
    ChartCard5Component,
    AverageChartComponent,
    InfoBox3Component,
  ],
})
export class ChartWidgetComponent implements OnInit {
  public radarChartOptions: Partial<radarChartOptions>;
  public circleChartOptions: Partial<circleChartOptions>;
  public areaChartOptions: Partial<areaChartOptions>;
  public dumbleChartOptions!: Partial<ChartOptions>;
  public revenueOptions!: Partial<ChartOptions>;
  public delChartOptions!: Partial<ChartOptions>;
  public basicRadialChart!: Partial<ChartOptions>;
  public gaugeChartOptions1!: Partial<ChartOptions>;
  public barchartOptions!: Partial<ChartOptions>;

  public smallChart1Options!: Partial<ChartOptions>;
  public smallChart2Options!: Partial<ChartOptions>;
  public smallChart3Options!: Partial<ChartOptions>;
  public smallChart4Options!: Partial<ChartOptions>;
  public expenseChartOptions!: Partial<ChartOptions>;
  public revenueSmallchartOptions!: Partial<ChartOptions>;

  breadscrums = [
    {
      title: 'Chart Widget',
      items: ['Widget'],
      active: 'Chart Widget',
    },
  ];

  title = 'Yearly Income';
  subtitle = 'Yearly income for company';

  title2 = 'Room Status chart';
  subtitle2 = 'Number of rooms available for booking in hotel';

  title3 = 'Product Sell Chart';
  subtitle3 = 'Number of product sell in current month';

  constructor() {
    this.expenseChart();
    this.dumbleChart();
    this.revenueChart();
    this.dealChart();
    this.radialChart1();
    this.barChartCard();
    this.gaugeChart1();
    this.revenueSmallchart();
    //radar Chart
    this.radarChartOptions = {
      series: [
        {
          name: 'Blue',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Green',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Orange',
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      chart: {
        height: 240,
        type: 'radar',
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
      },
    };

    // pie chart

    this.circleChartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 275,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#FF4560', '#775DD0', '#00E396', '#FEB019'],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '12px',
        position: 'left',
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };

    // area chart

    this.areaChartOptions = {
      chart: {
        height: 240,
        type: 'area',
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34],
        },
      ],
      grid: {
        show: true,
        borderColor: '#9aa0ac',
        strokeDashArray: 1,
      },
      xaxis: {
        type: 'datetime',
        categories: ['1990', '1991', '1992', '1993', '1994'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
  @ViewChild('chart', { static: true }) chart!: ChartComponent;

  ngOnInit() {
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();
  }
  private smallChart1() {
    this.smallChart1Options = {
      series: [
        {
          name: 'Appointments',
          data: [
            50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#6F42C1'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart2() {
    this.smallChart2Options = {
      series: [
        {
          name: 'Operations',
          data: [5, 6, 8, 5, 7, 5, 6, 4, 3, 4, 7, 4, 9, 6, 5, 6],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#FD7E14'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart3() {
    this.smallChart3Options = {
      series: [
        {
          name: 'New Patients',
          data: [
            50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#4CAF50'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart4() {
    this.smallChart4Options = {
      series: [
        {
          name: 'Earning',
          data: [
            150, 161, 180, 150, 172, 152, 160, 141, 130, 145, 170, 140, 193,
            163, 150, 162,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#2196F3'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private expenseChart() {
    this.expenseChartOptions = {
      colors: ['#6366f1'],
      series: [
        {
          name: 'Expense',
          data: [110, 135, 400, 101, 210, 140, 110, 135, 400],
        },
      ],
      chart: {
        height: 90,
        type: 'bar',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '50%',
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'july',
          'aug',
          'sep',
        ],
        position: 'top',

        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  private dumbleChart() {
    this.dumbleChartOptions = {
      series: [
        {
          data: [
            {
              x: '2008',
              y: [2800, 4500],
            },
            {
              x: '2009',
              y: [3200, 5100],
            },
            {
              x: '2010',
              y: [2950, 7800],
            },
            {
              x: '2011',
              y: [3000, 4600],
            },
            {
              x: '2012',
              y: [3500, 5100],
            },
            {
              x: '2013',
              y: [4500, 6500],
            },
            {
              x: '2014',
              y: [4100, 5600],
            },
          ],
        },
      ],
      chart: {
        height: 160,
        type: 'rangeBar',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [['#008FFB', '#00E396']],
        },
      },
      legend: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#00E396'],
          inverseColors: true,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: 'on',
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  private revenueChart() {
    this.revenueOptions = {
      series: [
        {
          name: 'Income',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Expense',
          data: [13, 23, 20, 8, 13, 27],
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ['#1E3D73', '#fb1c56'],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: 10,
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          '01/2011',
          '02/2011',
          '03/2011',
          '04/2011',
          '05/2011',
          '06/2011',
        ],
      },
      legend: {
        position: 'top',
        offsetY: 10,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  private dealChart() {
    this.delChartOptions = {
      series: [
        {
          name: 'Likes',
          data: [4, 3, 10, 9, 29, 19],
        },
      ],
      chart: {
        height: 100,
        width: 150,
        type: 'line',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        width: 4,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
        ],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  private radialChart1() {
    this.basicRadialChart = {
      pieSeries: [45],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '18px',
              offsetY: 8,
            },
          },
        },
      },
      fill: {
        type: 'solid',
        colors: ['#6366f1'],
      },
    };
  }

  private gaugeChart1() {
    this.gaugeChartOptions1 = {
      pieSeries: [67],
      chart: {
        height: 250,
        type: 'radialBar',
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
            },
          },
        },
      },
      colors: ['#F67B0E', '#D6D6D6'],
      stroke: {
        dashArray: 4,
      },
      labels: ['Storage Ratio'],
    };
  }
  private barChartCard() {
    this.barchartOptions = {
      series: [
        {
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chart: {
        height: 400,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },

          colors: {
            ranges: [
              {
                from: 0,
                to: 2,
                color: '#4CAF50', // Green
              },
              {
                from: 2,
                to: 5,
                color: '#E9E9E9', // Red
              },
              {
                from: 5,
                to: 10,
                color: '#7E36AF', // Purple
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#9aa0ac'],
        },
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + '%';
          },
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  // booking status data

  bookingStatusOptions = {
    series: [76],
    chart: {
      type: 'radialBar',
      offsetY: 20,
      height: '400px',
      parentHeightOffset: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#FF9800',
          strokeWidth: '97%',
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            opacity: 0.31,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -30,
        bottom: -15,
      },
    },
    fill: {
      type: 'gradient',
      colors: ['#4CAF50'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  };

  percentage: string = '+17.32%';
  footerText: string = 'Booking is increased compared to last month.';

  // info-card3 data
  infoData = [
    {
      count: 56,
      amount: '$8,261',
      description: 'Active Projects',
      bgClass: 'bg-1',
      image: 'assets/images/other/projects.svg',
    },
    {
      count: 2125,
      amount: '$757',
      description: 'New Customers',
      bgClass: 'bg-2',
      image: 'assets/images/other/customer.svg',
    },
    {
      count: 497,
      amount: '$2,547',
      description: 'New Orders',
      bgClass: 'bg-3',
      image: 'assets/images/other/order.svg',
    },
    {
      count: 22,
      amount: '$5,741',
      description: 'Room Booking',
      bgClass: 'bg-4',
      image: 'assets/images/other/traveling.svg',
    },
  ];

  private revenueSmallchart() {
    this.revenueSmallchartOptions = {
      chart: {
        height: 200,
        type: 'area',
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34],
        },
      ],
      grid: {
        show: true,
        borderColor: '#9aa0ac',
        strokeDashArray: 1,
      },
      xaxis: {
        type: 'datetime',
        categories: ['1990', '1991', '1992', '1993', '1994'],
      },
      tooltip: {
        theme: 'dark',
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: ['#6200ea', '#03a9f4'], // Purple and light blue
    };
  }
}
