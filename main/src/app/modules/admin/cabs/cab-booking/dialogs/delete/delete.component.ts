import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CabBookingService } from '../../cab-booking.service';

export interface DialogData {
  bookingId: number;
  guestName: string;
  hotelRoomNumber: string;
  cabModel: string;
}

@Component({
  selector: 'app-cab-booking-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
  ],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public cabBookingService: CabBookingService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.cabBookingService.deleteCabBooking(this.data.bookingId);
    this.dialogRef.close(this.data.bookingId);
  }
}
