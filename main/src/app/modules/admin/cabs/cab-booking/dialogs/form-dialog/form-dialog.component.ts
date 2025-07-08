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

import { CabBooking } from '../../cab-booking.model';
import { CabBookingService } from '../../cab-booking.service';

export interface DialogData {
  id: number;
  action: string;
  cabBooking: CabBooking;
}

@Component({
  selector: 'app-cab-booking-form-dialog',
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
export class CabBookingFormDialogComponent {
  action: string;
  dialogTitle: string;
  cabBookingForm: FormGroup;
  cabBooking: CabBooking;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<CabBookingFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public cabBookingService: CabBookingService, // Update the service as necessary
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Cab Booking :' + data.cabBooking.guestName;
      this.cabBooking = data.cabBooking;
    } else {
      this.dialogTitle = 'New Cab Booking';
      this.cabBooking = new CabBooking(); // Adjust if CabBooking has a default constructor
    }
    this.cabBookingForm = this.createCabBookingForm();
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

  createCabBookingForm(): FormGroup {
    return this.fb.group({
      bookingId: [this.cabBooking.bookingId],
      guestName: [this.cabBooking.guestName, [Validators.required]],
      hotelRoomNumber: [this.cabBooking.hotelRoomNumber, [Validators.required]],
      cabModel: [this.cabBooking.cabModel],
      pickupLocation: [this.cabBooking.pickupLocation, [Validators.required]],
      dropoffLocation: [this.cabBooking.dropoffLocation, [Validators.required]],
      pickupDate: [this.cabBooking.pickupDate, [Validators.required]],
      dropoffDate: [this.cabBooking.dropoffDate, [Validators.required]],
      bookingStatus: [this.cabBooking.bookingStatus],
      driverName: [this.cabBooking.driverName],
      driverContact: [this.cabBooking.driverContact],
    });
  }

  submit() {
    if (this.cabBookingForm.valid) {
      if (this.action === 'edit') {
        // Update existing cab booking
        this.cabBookingService.updateCabBooking(
          this.cabBookingForm.getRawValue()
        );
      } else {
        // Add new cab booking
        this.cabBookingService.addCabBooking(this.cabBookingForm.getRawValue());
      }
      console.log('row0----' + this.cabBookingForm.getRawValue());
      this.dialogRef.close(this.cabBookingForm.getRawValue());
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
