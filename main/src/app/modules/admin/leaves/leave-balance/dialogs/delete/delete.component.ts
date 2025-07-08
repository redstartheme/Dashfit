import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LeaveBalanceService } from '../../leave-balance.service';

export interface DialogData {
  employeeId: number;
  employeeName: string;
  department: string;
  designation: string;
}

@Component({
  selector: 'app-leave-balance-delete',
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
    public leaveBalanceService: LeaveBalanceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.leaveBalanceService.deleteLeaveBalance(this.data.employeeId);
    this.dialogRef.close(this.data.employeeId);
  }
}
