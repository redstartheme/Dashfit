import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { FeatherModule } from 'angular-feather';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  NgApexchartsModule,
  ApexLegend,
  ApexDataLabels,
} from 'ng-apexcharts';
import { PayslipService } from './payslip.service';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend?: ApexLegend;
  responsive: ApexResponsive[];
  labels: any;
}
export interface PaySlipChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend?: ApexLegend;
  responsive: ApexResponsive[];
  labels: any;
}

@Component({
    selector: 'app-salary',
    imports: [
        PageHeaderComponent,
        CommonModule,
        MatCardModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FeatherIconsComponent,
        MatOptionModule,
        MatCheckboxModule,
        FeatherModule,
        MatSlideToggleModule,
        NgApexchartsModule,
        FormsModule,
    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './salary.component.html',
    styleUrl: './salary.component.scss'
})
export class SalaryComponent implements OnInit, AfterViewInit {
  public salaryChart!: Partial<ChartOptions>;
  public paySlipChart!: Partial<PaySlipChartOptions>;
  showPaySlipChart = false;

  displayedColumns: string[] = [
    'payslipDate',
    'basicSalary',
    'allowances',
    'bonuses',
    'deductions',
    'grossSalary',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private payslipService: PayslipService) {
    this.funSalaryChart();
  }

  ngOnInit(): void {
    this.payslipService.getPayslips().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  setData(event: MatTabChangeEvent) {
    if (event.index == 1) {
      this.showPaySlipChart = true;
      this.funPaySlipChart();
    }
  }

  private funSalaryChart() {
    // salary chart start
    this.salaryChart = {
      series: [65000, 3500, 4287],
      chart: {
        type: 'donut',
        width: 250,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Earning', 'Reimbursements', 'Desuctions'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
    // salary chart end
  }
  private funPaySlipChart() {
    // paySlipChart chart start
    this.paySlipChart = {
      series: [65000, 6300],
      chart: {
        type: 'donut',
        width: 250,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Gross Pay', 'Deductions'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
    // paySlipChart chart end
  }
}
