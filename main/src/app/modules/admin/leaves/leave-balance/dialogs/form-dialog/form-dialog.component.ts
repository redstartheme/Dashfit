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

import { LeaveBalance } from '../../leave-balance.model';
import { LeaveBalanceService } from '../../leave-balance.service';

export interface DialogData {
  id: number;
  action: string;
  leaveBalance: LeaveBalance;
}

@Component({
  selector: 'app-leave-balance-form-dialog',
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
export class LeaveBalanceFormDialogComponent {
  action: string;
  dialogTitle: string;
  leaveBalanceForm: FormGroup;
  leaveBalance: LeaveBalance;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<LeaveBalanceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveBalanceService: LeaveBalanceService, // Update the service as necessary
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Leave Balance #' + data.leaveBalance.employeeName;
      this.leaveBalance = data.leaveBalance;
    } else {
      this.dialogTitle = 'New Leave Balance';
      this.leaveBalance = new LeaveBalance(); // Adjust if LeaveBalance has a default constructor
    }
    this.leaveBalanceForm = this.createLeaveBalanceForm();
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

  createLeaveBalanceForm(): FormGroup {
    return this.fb.group({
      id: [this.leaveBalance.employeeId],
      employeeId: [this.leaveBalance.employeeId, [Validators.required]],
      employeeName: [this.leaveBalance.employeeName, [Validators.required]],
      department: [this.leaveBalance.department, [Validators.required]],
      designation: [this.leaveBalance.designation],
      leaveType: [this.leaveBalance.leaveType, [Validators.required]],
      totalEntitlement: [
        this.leaveBalance.totalEntitlement,
        [Validators.required],
      ],
      leaveTaken: [this.leaveBalance.leaveTaken, [Validators.required]],
      leaveBalance: [this.leaveBalance.leaveBalance, [Validators.required]],
      carryForward: [this.leaveBalance.carryForward],
      accrualRate: [this.leaveBalance.accrualRate],
      notes: [this.leaveBalance.notes],
      img: [this.leaveBalance.img],
    });
  }

  submit() {
    if (this.leaveBalanceForm.valid) {
      if (this.action === 'edit') {
        // Update existing leave balance
        this.leaveBalanceService.updateLeaveBalance(
          this.leaveBalanceForm.getRawValue()
        );
      } else {
        // Add new leave balance
        this.leaveBalanceService.addLeaveBalance(
          this.leaveBalanceForm.getRawValue()
        );
      }
      this.dialogRef.close(this.leaveBalanceForm.getRawValue());
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
          // Update form field with the image URL
          this.leaveBalanceForm.patchValue({
            img: this.url,
          });
        }
      };
    }
  }
}
