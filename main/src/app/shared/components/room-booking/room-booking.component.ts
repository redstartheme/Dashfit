import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { MatButtonModule } from '@angular/material/button';

export interface Booking {
  id: number;
  img: string;
  guestName: string;
  checkInDate: Date;
  checkOutDate: Date;
  mobile: string;
  roomNo: string;
  status: string;
}

const BOOKINGS_DATA: Booking[] = [
  {
    id: 1,
    img: 'assets/images/avatars/avatar-1.jpg',
    guestName: 'John Doe',
    checkInDate: new Date('2023-10-01'),
    checkOutDate: new Date('2023-10-05'),
    mobile: '1234567890',
    roomNo: '501',
    status: 'Booked',
  },
  {
    id: 2,
    img: 'assets/images/avatars/avatar-2.jpg',
    guestName: 'Jane Smith',
    checkInDate: new Date('2023-10-02'),
    checkOutDate: new Date('2023-10-06'),
    mobile: '0987654321',
    roomNo: '502',
    status: 'Booked',
  },
  {
    id: 3,
    img: 'assets/images/avatars/avatar-3.jpg',
    guestName: 'Alice Johnson',
    checkInDate: new Date('2023-10-03'),
    checkOutDate: new Date('2023-10-07'),
    mobile: '5551234567',
    roomNo: '503',
    status: 'CheckOut',
  },
  {
    id: 4,
    img: 'assets/images/avatars/avatar-4.jpg',
    guestName: 'Bob Brown',
    checkInDate: new Date('2023-10-04'),
    checkOutDate: new Date('2023-10-08'),
    mobile: '4449876543',
    roomNo: '504',
    status: 'Booked',
  },
  {
    id: 5,
    img: 'assets/images/avatars/avatar-5.jpg',
    guestName: 'Charlie Davis',
    checkInDate: new Date('2023-10-05'),
    checkOutDate: new Date('2023-10-09'),
    mobile: '7776543210',
    roomNo: '505',
    status: 'CheckIn',
  },
  {
    id: 6,
    img: 'assets/images/avatars/avatar-6.jpg',
    guestName: 'Eve Wilson',
    checkInDate: new Date('2023-10-06'),
    checkOutDate: new Date('2023-10-10'),
    mobile: '8887654321',
    roomNo: '506',
    status: 'Cancelled',
  },
  {
    id: 7,
    img: 'assets/images/avatars/avatar-7.jpg',
    guestName: 'David Clark',
    checkInDate: new Date('2023-10-07'),
    checkOutDate: new Date('2023-10-11'),
    mobile: '3332221111',
    roomNo: '507',
    status: 'Booked',
  },
];

@Component({
    selector: 'app-room-booking',
    imports: [
        DatePipe,
        MatTableModule,
        MatTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        FeatherIconsComponent,
    ],
    templateUrl: './room-booking.component.html',
    styleUrl: './room-booking.component.scss'
})
export class RoomBookingComponent {
  columnDefinitions = [
    { def: 'roomNo', label: 'Room No', type: 'text' },
    { def: 'guestName', label: 'Name', type: 'text' },
    { def: 'checkInDate', label: 'Check In', type: 'date' },
    { def: 'checkOutDate', label: 'Check Out', type: 'date' },
    { def: 'mobile', label: 'Mobile', type: 'phone' },
    { def: 'status', label: 'Status', type: 'text' },
    { def: 'actions', label: 'Actions', type: 'actionBtn' },
  ];

  dataSource = BOOKINGS_DATA;

  getDisplayedColumns(): string[] {
    return this.columnDefinitions.map((cd) => cd.def);
  }
}
