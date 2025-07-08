import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
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

import { LeaveRequest } from '../../leave-requests.model';
import { LeaveRequestService } from '../../leave-requests.service';

export interface DialogData {
  id: number;
  action: string;
  leaveRequest: LeaveRequest;
}

@Component({
  selector: 'app-leave-request-form-dialog',
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
export class LeaveRequestFormDialogComponent {
  action: string;
  dialogTitle: string;
  leaveRequestForm: FormGroup;
  leaveRequest: LeaveRequest;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<LeaveRequestFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveRequestService: LeaveRequestService, // Update the service as necessary
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Leave Request #' + data.leaveRequest.id;
      this.leaveRequest = data.leaveRequest;
    } else {
      this.dialogTitle = 'New Leave Request';
      this.leaveRequest = new LeaveRequest(); // Adjust if LeaveRequest has a default constructor
    }
    this.leaveRequestForm = this.createLeaveRequestForm();
  }

  formControl = new FormControl('', [
    Validators.required,
    // Validators.customValidator,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('custom')
      ? 'Not a valid input'
      : '';
  }

  createLeaveRequestForm(): FormGroup {
    return this.fb.group({
      id: [this.leaveRequest.id],
      employeeId: [this.leaveRequest.employeeId],
      img: [this.leaveRequest.img],
      name: [this.leaveRequest.name, [Validators.required]],
      department: [this.leaveRequest.department, [Validators.required]],
      designation: [this.leaveRequest.designation],
      contact: [this.leaveRequest.contact],
      type: [this.leaveRequest.type, [Validators.required]],
      from: [this.leaveRequest.from, [Validators.required]],
      leaveTo: [this.leaveRequest.leaveTo, [Validators.required]],
      noOfDays: [this.leaveRequest.noOfDays],
      status: [this.leaveRequest.status],
      approvedBy: [this.leaveRequest.approvedBy],
      submissionDate: [this.leaveRequest.submissionDate],
      returnDate: [this.leaveRequest.returnDate],
      substitute: [this.leaveRequest.substitute],
      reason: [this.leaveRequest.reason, [Validators.required]],
      note: [this.leaveRequest.note],
    });
  }

  submit() {
    if (this.leaveRequestForm.valid) {
      if (this.action === 'edit') {
        // Update existing leave request
        this.leaveRequestService.updateLeaves(
          this.leaveRequestForm.getRawValue()
        );
      } else {
        // Add new leave request
        this.leaveRequestService.addLeaves(this.leaveRequestForm.getRawValue());
      }
      this.dialogRef.close(this.leaveRequestForm.getRawValue());
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(target.files[0]); // read file as data url

      reader.onload = (e) => {
        if (e.target) {
          this.url = e.target.result as string; // Explicitly cast to avoid undefined
        }
      };
    }
  }
}
