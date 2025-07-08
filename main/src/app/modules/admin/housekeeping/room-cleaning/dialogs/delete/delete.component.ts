import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RoomCleaningService } from '../../room-cleaning.service';

export interface DialogData {
  id: number;
  assignedStaff: string;
  cleaningType: string;
  roomNo: string;
}

@Component({
  selector: 'app-room-cleaning-delete',
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
    public roomCleaningService: RoomCleaningService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.roomCleaningService.deleteRoomCleaning(this.data.id);
    this.dialogRef.close(this.data.id);
  }
}
