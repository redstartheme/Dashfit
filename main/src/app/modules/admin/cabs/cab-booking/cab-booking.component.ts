import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { CabBookingFormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { CabBooking } from './cab-booking.model';
import { CabBookingService } from './cab-booking.service';
import { rowsAnimation, TableElement, TableExportUtil } from '@shared';
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
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';

@Component({
  selector: 'app-cab-booking',
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
    NgClass,
    FeatherIconsComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatPaginatorModule,
    DatePipe,
    TableShowHideColumnComponent,
  ],
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.scss'],
})
export class CabBookingComponent implements OnInit, OnDestroy {
  columnDefinitions = [
    { def: 'select', label: 'Select', type: 'check', visible: true },
    { def: 'bookingId', label: 'Booking ID', type: 'text', visible: false },
    { def: 'guestName', label: 'Guest Name', type: 'text', visible: true },
    {
      def: 'hotelRoomNumber',
      label: 'Room Number',
      type: 'text',
      visible: true,
    },
    {
      def: 'pickupLocation',
      label: 'Pickup Location',
      type: 'text',
      visible: true,
    },
    {
      def: 'dropoffLocation',
      label: 'Dropoff Location',
      type: 'text',
      visible: true,
    },
    {
      def: 'pickupDate',
      label: 'Pickup Date',
      type: 'date',
      visible: true,
    },
    {
      def: 'dropoffDate',
      label: 'Dropoff Date',
      type: 'date',
      visible: true,
    },
    { def: 'cabModel', label: 'Cab Model', type: 'text', visible: false },
    {
      def: 'licensePlate',
      label: 'License Plate',
      type: 'text',
      visible: false,
    },
    { def: 'bookingStatus', label: 'Status', type: 'text', visible: true },
    { def: 'driverName', label: 'Driver Name', type: 'text', visible: true },
    {
      def: 'driverContact',
      label: 'Driver Contact',
      type: 'text',
      visible: true,
    },
    { def: 'amount', label: 'Amount', type: 'number', visible: false },
    {
      def: 'specialRequests',
      label: 'Special Requests',
      type: 'text',
      visible: false,
    },
    {
      def: 'bookingSource',
      label: 'Booking Source',
      type: 'text',
      visible: false,
    },
    { def: 'actions', label: 'Actions', type: 'actionBtn', visible: true },
  ];

  dataSource = new MatTableDataSource<CabBooking>([]);
  selection = new SelectionModel<CabBooking>(true, []);
  private destroy$ = new Subject<void>();
  contextMenuPosition = { x: '0px', y: '0px' };
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter') filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu?: MatMenuTrigger;

  constructor(
    public dialog: MatDialog,
    public cabBookingService: CabBookingService,
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

  addNew() {
    this.openDialog('add');
  }

  editCall(row: CabBooking) {
    this.openDialog('edit', row);
  }

  openDialog(action: 'add' | 'edit', data?: CabBooking) {
    const dialogRef = this.dialog.open(CabBookingFormDialogComponent, {
      width: '60vw',
      maxWidth: '100vw',
      data: { cabBooking: data, action },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
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

  private updateRecord(updatedRecord: CabBooking) {
    const index = this.dataSource.data.findIndex(
      (record) => record.bookingId === updatedRecord.bookingId
    );

    if (index !== -1) {
      this.dataSource.data[index] = updatedRecord;
      this.dataSource._updateChangeSubscription();
    }
  }

  deleteItem(row: CabBooking) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: row });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(
          (record) => record.bookingId !== row.bookingId
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
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

  loadData() {
    this.cabBookingService.getAllCabBookings().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
        this.refreshTable();
        this.dataSource.filterPredicate = (data: CabBooking, filter: string) =>
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
    const exportData: Partial<TableElement>[] = this.dataSource.data.map(
      (x) => ({
        'Booking ID': x.bookingId,
        'Guest Name': x.guestName,
        'Room Number': x.hotelRoomNumber,
        'Pickup Location': x.pickupLocation,
        'Dropoff Location': x.dropoffLocation,
        'Pickup Date/Time': x.pickupDate,
        'Dropoff Date/Time': x.dropoffDate,
        'Cab Model': x.cabModel,
        'License Plate': x.licensePlate,
        Status: x.bookingStatus,
        'Driver Name': x.driverName,
        'Driver Contact': x.driverContact,
        Amount: x.amount,
        'Special Requests': x.specialRequests,
        'Booking Source': x.bookingSource,
      })
    );

    TableExportUtil.exportToExcel(exportData, 'cab_bookings');
  }

  onContextMenu(event: MouseEvent, item: CabBooking) {
    event.preventDefault();
    this.contextMenuPosition.x = `${event.clientX}px`;
    this.contextMenuPosition.y = `${event.clientY}px`;
    if (this.contextMenu && this.contextMenu.menu) {
      this.contextMenu.menuData = { item };
      this.contextMenu.menu.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }
  }
}
