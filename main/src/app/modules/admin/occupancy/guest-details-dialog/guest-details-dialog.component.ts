import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Occupancy } from '../occupancy.model';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-guest-details-dialog',
    imports: [
        MatDialogModule,
        MatTabsModule,
        MatButtonModule,
        MatDialogClose,
        MatIconModule,
        MatCardModule,
    ],
    templateUrl: './guest-details-dialog.component.html',
    styleUrl: './guest-details-dialog.component.scss'
})
export class GuestDetailsDialogComponent {
  roomData: Occupancy;
  dialogTitle: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { room: Occupancy },
    public dialogRef: MatDialogRef<GuestDetailsDialogComponent>
  ) {
    this.roomData = data.room;
    this.dialogTitle = 'Room # ' + this.roomData.roomNo;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  editGuest() {
    // Logic for editing guest details
    console.log('Edit guest details');
  }
}
