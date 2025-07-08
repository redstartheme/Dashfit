import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { LeaveBalanceFormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { LeaveBalance } from './leave-balance.model';
import { TableElement, TableExportUtil } from '@shared';
import { NgClass, DatePipe, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { LeaveBalanceService } from './leave-balance.service';
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';

@Component({
  selector: 'app-leave-balance',
  imports: [
    PageHeaderComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTableModule,
    MatSort,
    NgClass,
    FeatherIconsComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatPaginator,
    DatePipe,
    TableShowHideColumnComponent,
  ],
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.scss'],
})
export class LeaveBalanceComponent implements OnInit, OnDestroy {
  columnDefinitions = [
    { def: 'employeeId', label: 'Emp ID', type: 'text', visible: true },
    { def: 'employeeName', label: 'Name', type: 'text', visible: true },
    { def: 'department', label: 'Department', type: 'text', visible: false },
    { def: 'designation', label: 'Designation', type: 'text', visible: true },
    { def: 'leaveType', label: 'Leave Type', type: 'text', visible: true },
    {
      def: 'totalEntitlement',
      label: 'Total Entitlement',
      type: 'text',
      visible: true,
    },
    { def: 'leaveTaken', label: 'Leave Taken', type: 'text', visible: true },
    {
      def: 'leaveBalance',
      label: 'Leave Balance',
      type: 'text',
      visible: true,
    },
    {
      def: 'carryForward',
      label: 'Carry Forward',
      type: 'text',
      visible: true,
    },
    { def: 'accrualRate', label: 'Accrual Rate', type: 'text', visible: false },
    { def: 'notes', label: 'Notes', type: 'text', visible: true },
    { def: 'actions', label: 'Actions', type: 'actionBtn', visible: true },
  ];

  dataSource = new MatTableDataSource<LeaveBalance>([]);
  selection = new SelectionModel<LeaveBalance>(true, []);
  private destroy$ = new Subject<void>();
  contextMenuPosition = { x: '0px', y: '0px' };
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter') filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu?: MatMenuTrigger;

  constructor(
    public dialog: MatDialog,
    public leaveBalanceService: LeaveBalanceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refresh() {
    this.loadData();
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions
      .filter((cd) => cd.visible)
      .map((cd) => cd.def);
  }

  editCall(row: LeaveBalance) {
    this.openDialog('edit', row);
  }

  addNew() {
    this.openDialog('add');
  }

  openDialog(action: 'add' | 'edit', data?: LeaveBalance) {
    const dialogRef = this.dialog.open(LeaveBalanceFormDialogComponent, {
      width: '60vw',
      maxWidth: '100vw',
      data: { leaveBalance: data, action },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'add') {
          this.dataSource.data = [result, ...this.dataSource.data];
        } else {
          this.updateRecord(result);
        }
        this.refreshTable();
        this.showNotification(
          action === 'add' ? 'snackbar-success' : 'black',
          `${action === 'add' ? 'Add' : 'Edit'} Record Successfully...!!!`,
          'bottom',
          'center'
        );
      }
    });
  }

  private updateRecord(updatedRecord: LeaveBalance) {
    const index = this.dataSource.data.findIndex(
      (record) => record.employeeId === updatedRecord.employeeId
    );
    if (index !== -1) {
      this.dataSource.data[index] = updatedRecord;
      this.dataSource._updateChangeSubscription();
    }
  }

  deleteItem(row: LeaveBalance) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: row });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(
          (r) => r.employeeId !== row.employeeId
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Deleted Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }

  private refreshTable() {
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.dataSource.data = this.dataSource.data.filter(
      (item) => !this.selection.selected.includes(item)
    );
    this.selection.clear();
    this.showNotification(
      'snackbar-danger',
      `${totalSelect} Record(s) Deleted Successfully...!!!`,
      'bottom',
      'center'
    );
  }

  private loadData() {
    this.leaveBalanceService.getAllLeaveBalances().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
        this.refreshTable();
        this.dataSource.filterPredicate = (
          data: LeaveBalance,
          filter: string
        ) =>
          Object.values(data).some((value) =>
            value.toString().toLowerCase().includes(filter)
          );
      },
      error: (err) => console.error(err),
    });
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  exportExcel() {
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        'Employee ID': x.employeeId,
        Name: x.employeeName,
        Department: x.department,
        Designation: x.designation,
        'Leave Type': x.leaveType,
        'Total Entitlement': x.totalEntitlement,
        'Leave Taken': x.leaveTaken,
        'Leave Balance': x.leaveBalance,
        'Carry Forward': x.carryForward,
        'Accrual Rate': x.accrualRate,
        Notes: x.notes,
      }));

    TableExportUtil.exportToExcel(exportData, 'leave_balances');
  }

  onContextMenu(event: MouseEvent, item: LeaveBalance) {
    event.preventDefault();
    this.contextMenuPosition = {
      x: `${event.clientX}px`,
      y: `${event.clientY}px`,
    };
    if (this.contextMenu?.menu) {
      this.contextMenu.menuData = { item };
      this.contextMenu.menu.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }
  }
}
