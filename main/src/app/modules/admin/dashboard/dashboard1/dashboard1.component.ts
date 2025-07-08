import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';

import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RoomBookingComponent } from '../../../../shared/components/room-booking/room-booking.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { GuestListCardComponent } from '@shared/components/guest-list-card/guest-list-card.component';
import { AvailabilityCardComponent } from '@shared/components/availability-card/availability-card.component';
import { ReviewWidgetComponent } from '@shared/components/review-widget/review-widget.component';

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

export interface pieChartOptions {
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  legend?: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  responsive?: ApexResponsive[];
  colors: string[];
  labels?: string[];
}

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    NgScrollbar,
    NgApexchartsModule,
    FeatherModule,
    RoomBookingComponent,
    GuestListCardComponent,
    AvailabilityCardComponent,
    ReviewWidgetComponent
],
})
export class Dashboard1Component {
  public smallChart1Options!: Partial<ChartOptions>;
  public smallChart2Options!: Partial<pieChartOptions>;
  public smallChart3Options!: Partial<ChartOptions>;
  public smallChart4Options!: Partial<pieChartOptions>;
  public reservationChartOptions!: Partial<ChartOptions>;
  public lineChartOptions!: Partial<ChartOptions>;
  public barChartOptions!: Partial<ChartOptions>;

  constructor() {
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();
    this.reservationChart();
    this.lineChart();
    this.barChart();
  }

  private smallChart1() {
    this.smallChart1Options = {
      colors: ['#FF7F31'],
      series: [
        {
          name: 'Profit',
          data: [235, 300, 274, 310, 210, 289, 351, 135, 255],
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

  private smallChart2() {
    this.smallChart2Options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        height: 90,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Delux', 'Super Delux', 'Vila', 'Double', 'Single'],
      colors: ['#FF631A', '#F7A102', '#FFC000', '#007360', '#1B9526'],
    };
  }
  private smallChart3() {
    this.smallChart3Options = {
      series: [
        {
          name: 'Likes',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
        },
      ],
      chart: {
        height: 80,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 7,
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
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
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
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
  private smallChart4() {
    this.smallChart4Options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'pie',
        height: 90,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Delux', 'Super Delux', 'Vila', 'Double', 'Single'],
      colors: ['#FF5773', '#FED000', '#bdc3c7', '#88E0B0', '#c0392b'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
  private reservationChart() {
    this.reservationChartOptions = {
      series: [
        {
          name: 'Booked',
          data: [44, 55, 41, 67, 22, 43, 55, 64],
        },
        {
          name: 'Canceled',
          data: [13, 23, 20, 18, 13, 27, 12, 9],
        },
      ],
      chart: {
        type: 'bar',
        height: 270,
        stacked: true,
        foreColor: '#9aa0ac',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
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
          borderRadius: 10,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          columnWidth: '40%',
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
        ],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
      },
      colors: ['#775DD0', '#FCAF1B'],
    };
  }
  private lineChart() {
    this.lineChartOptions = {
      series: [
        {
          name: 'Online',
          data: [80, 250, 30, 120, 260, 100, 180],
        },
        {
          name: 'Offline',
          data: [85, 130, 85, 225, 80, 190, 120],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        foreColor: '#9aa0ac',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#6777EF', '#8B8697'],
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
        borderColor: '#9aa0ac',
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#54CA68', '#EF447C'],
          stops: [0, 50, 65, 91],
        },
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        // opposite: true,
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
  private barChart() {
    this.barChartOptions = {
      series: [
        {
          name: 'Users',
          data: [24, 46, 28, 29, 39, 22, 30],
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: false,
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#6777EF'],
      plotOptions: {
        bar: {
          borderRadius: 2,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        borderColor: '#9aa0ac',
      },
      yaxis: {},
      tooltip: {
        shared: false,
        theme: 'dark',
        x: {
          formatter: function (val) {
            return val.toString();
          },
        },
        y: {
          formatter: function (val) {
            return val.toString();
          },
        },
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
    };
  }

  // Guest List

  guestLists = [
    {
      name: 'Cara Stevens',
      roomNo: 'Room:102',
      date: "12 June '20",
      time: '09:00-10:00',
      imageUrl: 'assets/images/avatars/avatar-1.jpg',
    },
    {
      name: 'Airi Satou',
      roomNo: 'Room:105',
      date: "13 June '20",
      time: '11:00-12:00',
      imageUrl: 'assets/images/avatars/avatar-2.jpg',
    },
    {
      name: 'Jens Brincker',
      roomNo: 'Room:302',
      date: "15 June '20",
      time: '09:30-10:30',
      imageUrl: 'assets/images/avatars/avatar-3.jpg',
    },
    {
      name: 'Angelica Ramos',
      roomNo: 'Room:507',
      date: "16 June '20",
      time: '14:00-15:00',
      imageUrl: 'assets/images/avatars/avatar-4.jpg',
    },
    {
      name: 'Cara Stevens',
      roomNo: 'Room:804',
      date: "18 June '20",
      time: '11:00-12:30',
      imageUrl: 'assets/images/avatars/avatar-5.jpg',
    },
    {
      name: 'Jacob Ryan',
      roomNo: 'Room:705',
      date: "22 June '20",
      time: '13:00-14:15',
      imageUrl: 'assets/images/avatars/avatar-6.jpg',
    },
  ];

  // review list

  reviewList = [
    {
      name: 'Alis Smith',
      timeAgo: 'a week ago',
      rating: 3.5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.',
      imageUrl: 'assets/images/avatars/avatar-1.jpg',
    },
    {
      name: 'John Dio',
      timeAgo: 'a week ago',
      rating: 2.5,
      comment:
        'Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus.',
      imageUrl: 'assets/images/avatars/avatar-2.jpg',
    },
  ];
}
