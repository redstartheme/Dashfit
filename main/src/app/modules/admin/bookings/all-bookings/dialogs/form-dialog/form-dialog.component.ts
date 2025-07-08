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
import { AllBookings } from '../../all-bookings.model'; // Update the path as necessary
import { AllBookingService } from '../../all-bookings.service'; // Update the path as necessary

export interface DialogData {
  id: number;
  action: string;
  allBookings: AllBookings;
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
  allBookingsForm: FormGroup;
  allBookings: AllBookings;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public allBookingService: AllBookingService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.allBookings.fName + ' ' + data.allBookings.lName;
      this.allBookings = data.allBookings;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as AllBookings;
      this.allBookings = new AllBookings(blankObject);
    }
    this.allBookingsForm = this.createContactForm();
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
      id: [this.allBookings.id],
      img: [this.allBookings.img],
      fName: [this.allBookings.fName, [Validators.required]],
      lName: [this.allBookings.lName, [Validators.required]],
      status: [this.allBookings.status, [Validators.required]],
      email: [
        this.allBookings.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      package: [this.allBookings.package],
      checkIn: [this.allBookings.checkIn, [Validators.required]],
      checkOut: [this.allBookings.checkOut, [Validators.required]],
      roomType: [this.allBookings.roomType],
      mobile: [this.allBookings.mobile, [Validators.required]],
      payment: [this.allBookings.payment],
    });
  }

  submit() {
    if (this.allBookingsForm.valid) {
      if (this.action === 'edit') {
        // Update existing booking
        this.allBookingService.updateAllBookings(
          this.allBookingsForm.getRawValue()
        );
      } else {
        // Add new booking
        this.allBookingService.addBookings(this.allBookingsForm.getRawValue());
      }
      this.dialogRef.close(this.allBookingsForm.getRawValue());
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
