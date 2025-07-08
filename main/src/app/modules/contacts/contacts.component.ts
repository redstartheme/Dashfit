import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgClass, formatDate } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContactsService } from './contacts.service';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableElement, TableExportUtil, rowsAnimation } from '@shared';
import { fromEvent, BehaviorSubject, Observable, merge, map } from 'rxjs';
import { Contacts } from './contacts.model';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-contacts',
  imports: [
    CommonModule,
    PageHeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgClass,
    MatCheckboxModule,
    MatMenuModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgScrollbar,
    FeatherIconsComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  animations: [rowsAnimation],
})
export class ContactsComponent implements OnInit {
  filterToggle = false;
  displayedColumns = ['select', 'name', 'email', 'mobile', 'actions'];
  exampleDatabase?: ContactsService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<Contacts>(true, []);
  id?: number;
  contacts?: Contacts;
  isFrequentClick?: boolean = false;
  isFavouriteClick?: boolean = false;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public contactsService: ContactsService,
    private snackBar: MatSnackBar
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        contacts: this.contacts,
        action: 'add',
      },
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase?.dataChange.value.unshift(
          this.contactsService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  toggleStar(row: Contacts) {
    row.favourite = row.favourite === 'true' ? 'false' : 'true';
    const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
      (x) => x.id === this.id
    );
    // Then you update that record using data from dialogData (values you enetered)
    if (foundIndex != null && this.exampleDatabase) {
      this.exampleDatabase.dataChange.value[foundIndex] =
        this.contactsService.getDialogData();
      this.favouriteCall('true');
    }
  }
  onMouseEnter(row: Contacts) {
    row.isHovered = 'true';
  }

  onMouseLeave(row: Contacts) {
    row.isHovered = 'false';
  }
  detailsCall(row: Contacts) {
    this.dialog.open(FormComponent, {
      data: {
        contacts: row,
        action: 'details',
      },
      height: '85%',
      width: '35%',
      autoFocus: false,
    });
  }
  favouriteCall(data: string) {
    this.isFavouriteClick = true;
    this.dataSource.setFavouriteCall(this.isFavouriteClick);
    this.dataSource.filter = data.trim().toLowerCase();
  }
  frequentCall(data: string) {
    this.isFrequentClick = true;
    this.dataSource.setFriquentCall(this.isFrequentClick);
    this.dataSource.filter = data.trim().toLowerCase();
  }

  editCall(row: Contacts) {
    this.id = row.id;
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        contacts: row,
        action: 'edit',
      },
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        if (foundIndex != null && this.exampleDatabase) {
          this.exampleDatabase.dataChange.value[foundIndex] =
            this.contactsService.getDialogData();
          // And lastly refresh table
          this.refreshTable();
          this.showNotification(
            'black',
            'Edit Record Successfully...!!!',
            'bottom',
            'center'
          );
        }
      }
    });
  }
  deleteItem(row: Contacts) {
    this.id = row.id;
    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '280px',
      width: '300px',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // for delete we use splice in order to remove single object from DataService
        if (foundIndex != null && this.exampleDatabase) {
          this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
          this.refreshTable();
          this.showNotification(
            'snackbar-danger',
            'Delete Record Successfully...!!!',
            'bottom',
            'center'
          );
        }
      }
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex(
        (d) => d === item
      );
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      this.exampleDatabase?.dataChange.value.splice(index, 1);
      this.refreshTable();
      this.selection = new SelectionModel<Contacts>(true, []);
    });
    this.showNotification(
      'snackbar-danger',
      totalSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  public loadData() {
    this.exampleDatabase = new ContactsService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup').subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }
  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        Name: x.name,
        Email: x.email,
        Mobile: x.mobile,
        'Birth Date':
          formatDate(new Date(x.birthDate), 'yyyy-MM-dd', 'en') || '',
        Address: x.address,
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
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
}
export class ExampleDataSource extends DataSource<Contacts> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Contacts[] = [];
  renderedData: Contacts[] = [];
  isFrequentClick = false;
  isFavouriteClick = false;
  constructor(
    public exampleDatabase: ContactsService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Contacts[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllContactss();
    return merge(...displayDataChanges).pipe(
      map(() => {
        const filteredData = this.exampleDatabase.data.slice();
        if (this.isFrequentClick) {
          this.filteredData = filteredData.filter((contacts: Contacts) => {
            const searchStr = contacts.frequent.toLowerCase();
            this.isFrequentClick = false;
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        } else if (this.isFavouriteClick) {
          this.filteredData = filteredData.filter((contacts: Contacts) => {
            const searchStr = contacts.favourite.toLowerCase();
            this.isFavouriteClick = false;
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        } else {
          this.filteredData = filteredData.filter((contacts: Contacts) => {
            const searchStr = (
              contacts.name +
              contacts.birthDate +
              contacts.email +
              contacts.mobile +
              contacts.address +
              contacts.favourite +
              contacts.frequent
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        }

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  setFriquentCall(isFriquent: boolean) {
    this.isFrequentClick = isFriquent;
  }
  setFavouriteCall(isFavourite: boolean) {
    this.isFavouriteClick = isFavourite;
  }
  disconnect() {
    //disconnect
  }
  /** Returns a sorted copy of the database data. */
  sortData(data: Contacts[]): Contacts[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'email':
          [propertyA, propertyB] = [a.email, b.email];
          break;
        case 'birthDate':
          [propertyA, propertyB] = [a.birthDate, b.birthDate];
          break;
        case 'address':
          [propertyA, propertyB] = [a.address, b.address];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
