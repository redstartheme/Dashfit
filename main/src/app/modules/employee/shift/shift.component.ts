import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { rowsAnimation } from '@shared';
import { DatePipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EmpShift } from './shift.model';
import { EmpShiftService } from './shift.service';

@Component({
  selector: 'app-shift',
  animations: [rowsAnimation],
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
    MatSortModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatPaginatorModule,
    DatePipe,
  ],
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
})
export class ShiftComponent implements OnInit, OnDestroy {
  columnDefinitions = [
    { def: 'date', label: 'Date', type: 'date', visible: true },
    { def: 'day', label: 'Day', type: 'text', visible: true },
    {
      def: 'shiftStartTime',
      label: 'Shift Start',
      type: 'text',
      visible: true,
    },
    { def: 'shiftEndTime', label: 'Shift End', type: 'text', visible: true },
    { def: 'duration', label: 'Duration', type: 'text', visible: true },
    { def: 'department', label: 'Department', type: 'text', visible: false },
    { def: 'role', label: 'Role', type: 'text', visible: true },
    { def: 'location', label: 'Location', type: 'text', visible: false },
    { def: 'supervisor', label: 'Supervisor', type: 'text', visible: false },
    { def: 'shiftType', label: 'Shift Type', type: 'text', visible: true },
    { def: 'status', label: 'Status', type: 'select', visible: false },
    { def: 'notes', label: 'Notes', type: 'text', visible: false },
    { def: 'breakStart', label: 'Break Start', type: 'text', visible: true },
    { def: 'breakEnd', label: 'Break End', type: 'text', visible: true },
    {
      def: 'shiftCoverage',
      label: 'Shift Coverage',
      type: 'text',
      visible: false,
    },
    { def: 'timeIn', label: 'Time In', type: 'text', visible: true },
    { def: 'timeOut', label: 'Time Out', type: 'text', visible: true },
    { def: 'requests', label: 'Requests', type: 'text', visible: false },
  ];

  dataSource = new MatTableDataSource<EmpShift>([]);
  selection = new SelectionModel<EmpShift>(true, []);
  private destroy$ = new Subject<void>();
  contextMenuPosition = { x: '0px', y: '0px' };
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter') filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu?: MatMenuTrigger;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public empShiftService: EmpShiftService,
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

  public loadData() {
    this.empShiftService.getAllEmpShifts().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
        this.refreshTable();
        this.dataSource.filterPredicate = (data: EmpShift, filter: string) =>
          Object.values(data).some((value) =>
            value.toString().toLowerCase().includes(filter)
          );
      },
      error: (err) => console.error(err),
    });
  }
}
