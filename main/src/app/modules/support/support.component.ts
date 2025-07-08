import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { TableCardComponent } from '@shared/components/table-card/table-card.component';

export interface SupportElement {
  checked: boolean;
  imageUrl: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  assignTo: string;
  date: string;
  action: string;
}
@Component({
  selector: 'app-support',
  imports: [
    PageHeaderComponent,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    TableCardComponent,
  ],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  displayedColumns = [
    { def: 'name', label: 'Name', type: 'text' },
    { def: 'email', label: 'Email', type: 'email' },
    { def: 'subject', label: 'Subject', type: 'text' },
    { def: 'status', label: 'Status', type: 'badge' },
    { def: 'assignTo', label: 'Assign To', type: 'text' },
    { def: 'date', label: 'Date', type: 'date' },
    { def: 'actions', label: 'Actions', type: 'actionBtn' },
  ];

  dataSource = new MatTableDataSource<SupportElement>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<SupportElement[]>('assets/data/support-data.json')
      .subscribe((data) => {
        this.dataSource.data = data; // Assign raw data to dataSource
        this.dataSource.paginator = this.paginator;
      });
  }
}
