import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LeaveRequestService } from '../../leave-request.service'; // Adjust the import based on your service location
import { LeaveRequest } from '../../leave-request.modal';

export interface DialogData {
  action: string;
  leaveRequest: LeaveRequest;
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  leaveRequestForm: FormGroup;
  leaveRequest: LeaveRequest;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveRequestService: LeaveRequestService,
    private fb: FormBuilder
  ) {
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.leaveRequest.requestId;
      this.leaveRequest = data.leaveRequest;
    } else {
      this.dialogTitle = 'New Leave Request';
      this.leaveRequest = {} as LeaveRequest;
    }
    this.leaveRequestForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      requestId: [this.leaveRequest.requestId],
      employeeId: [this.leaveRequest.employeeId],
      employeeName: [this.leaveRequest.employeeName],
      leaveType: [this.leaveRequest.leaveType, [Validators.required]],
      startDate: [this.leaveRequest.startDate, [Validators.required]],
      endDate: [this.leaveRequest.endDate, [Validators.required]],
      status: [this.leaveRequest.status],
      reason: [this.leaveRequest.reason],
      applyDate: [this.leaveRequest.applyDate],
      dayType: [this.leaveRequest.dayType],
    });
  }

  submit() {
    if (this.leaveRequestForm.valid) {
      if (this.action === 'edit') {
        this.leaveRequestService.updateLeaveRequest(
          this.leaveRequestForm.getRawValue()
        );
      } else {
        this.leaveRequestService.addLeaveRequest(
          this.leaveRequestForm.getRawValue()
        );
      }
      this.dialogRef.close(this.leaveRequestForm.getRawValue());
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
