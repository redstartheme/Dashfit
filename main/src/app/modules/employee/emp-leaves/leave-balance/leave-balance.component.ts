import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { LeaveBalanceService } from './leave-balance.service';
import { LeaveBalance } from './leave-balance.model';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-leave-balance',
    imports: [
        PageHeaderComponent,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
    ],
    templateUrl: './leave-balance.component.html',
    styleUrls: ['./leave-balance.component.scss']
})
export class LeaveBalanceComponent implements OnInit {
  displayedColumns: string[] = ['leaveType', 'totalLeave', 'remainingLeave'];
  dataSource = new MatTableDataSource<LeaveBalance>();

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private leaveService: LeaveBalanceService) {}

  ngOnInit(): void {
    this.leaveService.getEmployeeData().subscribe((employee) => {
      this.dataSource.data = employee.leaveBalances;
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
