
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { AverageChartComponent } from '@shared/components/average-chart/average-chart.component';
import { BookingAverageComponent } from '@shared/components/booking-average/booking-average.component';
import { BookingStatusComponent } from '@shared/components/booking-status/booking-status.component';
import { ChartCard5Component } from '@shared/components/chart-card5/chart-card5.component';
import {
  ProgressTableComponent,
  SubjectProgress,
} from '@shared/components/progress-table/progress-table.component';
import { SmallCardChartComponent } from '@shared/components/small-card-chart/small-card-chart.component';
import { TableCardComponent } from '@shared/components/table-card/table-card.component';
import { FeatherModule } from 'angular-feather';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexResponsive,
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { NgScrollbar } from 'ngx-scrollbar';

export interface CircleChartOptions {
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  labels?: string[];
  colors?: string[];
  legend?: ApexLegend;
  grid?: ApexGrid;
  fill?: ApexFill;
  plotOptions?: ApexPlotOptions;
  responsive: ApexResponsive[];
}

export interface ChartOptions {
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
}
export interface RoomsCleaning {
  roomNo: string;
  progress: number;
  duration: string;
}

export interface Invoice {
  invoiceNo: string;
  clientName: string;
  clientImage: string;
  checkInDate: string;
  status: string;
  statusClass: string;
  total: string;
}

@Component({
  selector: 'app-dashboard2',
  imports: [
    MatProgressBarModule,
    MatCardModule,
    NgScrollbar,
    FeatherModule,
    MatTableModule,
    RouterModule,
    MatRadioModule,
    MatIconModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatSelectModule,
    AverageChartComponent,
    BookingStatusComponent,
    ChartCard5Component,
    ProgressTableComponent,
    TableCardComponent,
    SmallCardChartComponent,
    BookingAverageComponent
],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.scss',
})
export class Dashboard2Component {
  public revenueOptions!: Partial<ChartOptions>;
  public dealChartOptions!: Partial<ChartOptions>;
  public radarChartOptions!: Partial<ChartOptions>;
  public energyChartOptions!: Partial<ChartOptions>;

  totalBookings: number = 35;
  checkedIn: number = 26;
  checkedOut: number = 9;

  constructor() {
    this.revenueChart();
    this.dealChart();
    this.radarChart();
    this.energyChart();
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
    this.dealChartOptions = {
      series: [
        {
          name: 'Bookings',
          data: [4, 3, 10, 9, 29, 19],
        },
      ],
      chart: {
        height: 100,
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

  private radarChart() {
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
  }

  private energyChart() {
    this.energyChartOptions = {
      series: [
        {
          name: 'profit',
          data: [250, 470, 310, 449],
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
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
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

  // Progress table data

  roomStatus: SubjectProgress[] = [
    { subject: 'Room 502', progress: 30, duration: '2 Months' },
    { subject: 'Room 704', progress: 55, duration: '3 Months' },
    { subject: 'Room 102', progress: 67, duration: '1 Month' },
    { subject: 'Room 604', progress: 70, duration: '2 Months' },
    { subject: 'Room 301', progress: 24, duration: '3 Months' },
    { subject: 'Room 206', progress: 77, duration: '4 Months' },
    { subject: 'Room 406', progress: 41, duration: '2 Months' },
  ];

  // invoice data

  invoiceData = [
    {
      invoiceNo: '#IN7865',
      clientName: 'John Doe',
      dueDate: '12/05/2016',
      status: 'Paid',
      total: '$500',
      img: 'assets/images/user/user1.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN2301',
      clientName: 'Sarah Smith',
      dueDate: '03/31/2016',
      status: 'Not Paid',
      total: '$372',
      img: 'assets/images/user/user2.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN7239',
      clientName: 'Airi Satou',
      dueDate: '04/14/2017',
      status: 'Paid',
      total: '$1038',
      img: 'assets/images/user/user3.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN1482',
      clientName: 'Angelica Ramos',
      dueDate: '08/11/2017',
      status: 'Paid',
      total: '$872',
      img: 'assets/images/user/user4.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN8526',
      clientName: 'Ashton Cox',
      dueDate: '02/15/2018',
      status: 'Not Paid',
      total: '$2398',
      img: 'assets/images/user/user5.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN2473',
      clientName: 'Cara Stevens',
      dueDate: '01/28/2017',
      status: 'Paid',
      total: '$834',
      img: 'assets/images/user/user6.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN7366',
      clientName: 'Jacob Ryan',
      dueDate: '03/11/2017',
      status: 'Paid',
      total: '$147',
      img: 'assets/images/user/user7.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN5642',
      clientName: 'Emily Walker',
      dueDate: '09/12/2018',
      status: 'Paid',
      total: '$650',
      img: 'assets/images/user/user8.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN1457',
      clientName: 'Michael Brown',
      dueDate: '04/20/2019',
      status: 'Not Paid',
      total: '$1220',
      img: 'assets/images/user/user9.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN9083',
      clientName: 'Olivia Green',
      dueDate: '10/03/2020',
      status: 'Paid',
      total: '$850',
      img: 'assets/images/user/user10.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN3379',
      clientName: 'David Lee',
      dueDate: '06/25/2021',
      status: 'Paid',
      total: '$1295',
      img: 'assets/images/user/user11.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
    {
      invoiceNo: '#IN9874',
      clientName: 'Sophia Johnson',
      dueDate: '01/18/2022',
      status: 'Not Paid',
      total: '$320',
      img: 'assets/images/user/user2.jpg',
      invoiceLink: '#/admin/accounts/invoice',
    },
  ];

  invoiceColumnDefinitions = [
    { def: 'invoiceNo', label: 'Invoice No', type: 'text' },
    { def: 'clientName', label: 'Client Name', type: 'text' },
    { def: 'dueDate', label: 'Due Date', type: 'date' },
    { def: 'status', label: 'Status', type: 'badge' },
    { def: 'total', label: 'Total', type: 'currency' },
    { def: 'actions', label: 'Actions', type: 'actionBtn' },
  ];

  // booking data

  bookingData = [
    {
      name: 'Delux Room',
      progress: 65,
      color: 'primary',
      images: [
        'assets/images/rooms/double.jpg',
        'assets/images/rooms/vila.jpg',
        'assets/images/rooms/single.jpg',
      ],
    },
    {
      name: 'Super Delux',
      progress: 49,
      color: 'warn',
      images: [
        'assets/images/rooms/vila.jpg',
        'assets/images/rooms/super-delux.jpg',
        'assets/images/rooms/delux.jpg',
      ],
    },
    {
      name: 'Vila',
      progress: 88,
      color: 'accent',
      images: [
        'assets/images/rooms/delux.jpg',
        'assets/images/rooms/double.jpg',
        'assets/images/rooms/vila.jpg',
      ],
    },
  ];
}
