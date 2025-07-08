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

import { LeaveType } from '../../leave-types.model'; // Import the LeaveType model
import { LeaveTypesService } from '../../leave-types.service';

export interface DialogData {
  id: string;
  action: string;
  leaveType: LeaveType;
}

@Component({
  selector: 'app-leave-types-form-dialog',
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
export class LeaveTypesFormDialogComponent {
  action: string;
  dialogTitle: string;
  leaveTypeForm: FormGroup;
  leaveType: LeaveType;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<LeaveTypesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveTypeService: LeaveTypesService, // Update the service as necessary
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.leaveType.leaveName;
      this.leaveType = data.leaveType;
    } else {
      this.dialogTitle = 'New Leave Type';
      this.leaveType = new LeaveType(); // Adjust if LeaveType has a default constructor
    }
    this.leaveTypeForm = this.createLeaveTypeForm();
  }

  createLeaveTypeForm(): FormGroup {
    return this.fb.group({
      id: [this.leaveType.id],
      leaveName: [this.leaveType.leaveName, [Validators.required]],
      leaveUnit: [this.leaveType.leaveUnit, [Validators.required]],
      type: [this.leaveType.type, [Validators.required]],
      status: [this.leaveType.status],
      note: [this.leaveType.note],
      createdAt: [this.leaveType.createdAt],
      updatedAt: [this.leaveType.updatedAt],
      minimumDays: [this.leaveType.minimumDays],
      maximumDays: [this.leaveType.maximumDays],
      accrualRate: [this.leaveType.accrualRate],
      carryOverLimit: [this.leaveType.carryOverLimit],
      approvalRequired: [this.leaveType.approvalRequired],
      eligibilityCriteria: [this.leaveType.eligibilityCriteria],
      requestPeriod: [this.leaveType.requestPeriod],
      departmentRestrictions: [this.leaveType.departmentRestrictions],
      balance: [this.leaveType.balance],
      policyDocument: [this.leaveType.policyDocument],
      holidayImpact: [this.leaveType.holidayImpact],
      sickLeaveIncluded: [this.leaveType.sickLeaveIncluded],
      integration: [this.leaveType.integration],
    });
  }

  submit() {
    if (this.leaveTypeForm.valid) {
      if (this.action === 'edit') {
        // Update existing leave type
        this.leaveTypeService.updateLeaveType(this.leaveTypeForm.getRawValue());
      } else {
        // Add new leave type
        this.leaveTypeService.addLeaveType(this.leaveTypeForm.getRawValue());
      }
      this.dialogRef.close(this.leaveTypeForm.getRawValue());
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(target.files[0]); // Read file as data url

      reader.onload = (e) => {
        if (e.target) {
          this.url = e.target.result as string; // Explicitly cast to avoid undefined
        }
      };
    }
  }
}
