import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
    selector: 'app-add-booking',
    imports: [
        PageHeaderComponent,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        FileUploadComponent,
        MatButtonModule,
    ],
    templateUrl: './add-booking.component.html',
    styleUrl: './add-booking.component.scss'
})
export class AddBookingComponent {
  bookingForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city: [''],
      checkIn: ['', [Validators.required]],
      checkOut: ['', [Validators.required]],
      totalPerson: ['', [Validators.required]],
      package: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      address: [''],
      uploadFile: [''],
      note: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }
}
