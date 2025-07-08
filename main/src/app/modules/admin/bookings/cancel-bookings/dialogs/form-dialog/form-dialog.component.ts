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
import { CancelledBookings } from '../../cancel-bookings.model';
import { CancelBookingsService } from '../../cancel-bookings.service';

export interface DialogData {
  id: number;
  action: string;
  cancelledBookings: CancelledBookings;
}

@Component({
  selector: 'app-cancel-booking-form-dialog',
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
export class CancelBookingFormDialogComponent {
  action: string;
  dialogTitle: string;
  cancelledBookingsForm: FormGroup;
  cancelledBookings: CancelledBookings;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<CancelBookingFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public cancelledBookingService: CancelBookingsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = `${data.cancelledBookings.fName} ${data.cancelledBookings.lName}`;
      this.cancelledBookings = data.cancelledBookings;
    } else {
      this.dialogTitle = 'New Cancelled Booking';
      this.cancelledBookings = new CancelledBookings(); // Initialize with default values if needed
    }
    this.cancelledBookingsForm = this.createContactForm();
  }

  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.cancelledBookings.id],
      img: [this.cancelledBookings.img],
      fName: [this.cancelledBookings.fName, [Validators.required]],
      lName: [this.cancelledBookings.lName, [Validators.required]],
      email: [
        this.cancelledBookings.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      package: [this.cancelledBookings.package],
      roomType: [this.cancelledBookings.roomType],
      cancellationDate: [
        this.cancelledBookings.cancellationDate,
        [Validators.required],
      ],
      checkIn: [this.cancelledBookings.checkIn, [Validators.required]],
      checkOut: [this.cancelledBookings.checkOut, [Validators.required]],
      refundStatus: [
        this.cancelledBookings.refundStatus,
        [Validators.required],
      ],
      cancellationFee: [this.cancelledBookings.cancellationFee],
      reason: [this.cancelledBookings.reason],
      payment: [this.cancelledBookings.payment],
      mobile: [this.cancelledBookings.mobile],
      status: [this.cancelledBookings.status],
    });
  }

  submit() {
    if (this.cancelledBookingsForm.valid) {
      if (this.action === 'edit') {
        this.cancelledBookingService.updateCancelBooking(
          this.cancelledBookingsForm.getRawValue()
        );
      } else {
        this.cancelledBookingService.addCancelBooking(
          this.cancelledBookingsForm.getRawValue()
        );
      }
      this.dialogRef.close(this.cancelledBookingsForm.getRawValue());
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
