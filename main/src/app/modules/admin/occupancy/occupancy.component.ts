import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OccupancyService } from './occupancy.service';
import { Occupancy } from './occupancy.model';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GuestDetailsDialogComponent } from './guest-details-dialog/guest-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddGuestDetailsDialogComponent } from './add-guest-details-dialog/add-guest-details-dialog.component';

@Component({
    selector: 'app-occupancy',
    imports: [
        MatCardModule,
        CommonModule,
        PageHeaderComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './occupancy.component.html',
    styleUrl: './occupancy.component.scss'
})
export class OccupancyComponent implements OnInit {
  occupancy: Occupancy[] = [];
  filteredRooms: Occupancy[] = [];
  roomTypes: string[] = [];
  bedSizes: string[] = [];
  statuses: string[] = ['Booked', 'Available'];

  selectedStatus = '';
  selectedType = '';
  selectedBed = '';

  constructor(
    private occupancyService: OccupancyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.occupancyService.getOccupancy().subscribe((data) => {
      this.occupancy = data;
      this.filteredRooms = data;

      // Extract unique room types and bed sizes for dropdowns
      this.roomTypes = [...new Set(this.occupancy.map((room) => room.type))];
      this.bedSizes = [...new Set(this.occupancy.map((room) => room.bed))];
    });
  }

  filterRooms(): void {
    this.filteredRooms = this.occupancy.filter((room) => {
      const statusMatch = this.selectedStatus
        ? room.status === this.selectedStatus
        : true;
      const typeMatch = this.selectedType
        ? room.type === this.selectedType
        : true;
      const bedMatch = this.selectedBed ? room.bed === this.selectedBed : true;
      return statusMatch && typeMatch && bedMatch;
    });
  }
  clearFilters(): void {
    this.selectedStatus = '';
    this.selectedType = '';
    this.selectedBed = '';
    this.filterRooms(); // Apply filter after resetting
  }

  openGuestDetailsDialog(room: Occupancy): void {
    this.dialog.open(GuestDetailsDialogComponent, {
      width: '40vw',
      maxWidth: '100vw',
      data: {
        room,
      },
      autoFocus: false,
    });
  }
  openAddGuestDetailsDialog(room: Occupancy) {
    const dialogRef = this.dialog.open(AddGuestDetailsDialogComponent, {
      width: '40vw',
      maxWidth: '100vw',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Guest Details Submitted:', result);
        // Handle the form submission result here
      }
    });
  }
}
