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
    selector: 'app-edit-booking',
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
    templateUrl: './edit-booking.component.html',
    styleUrl: './edit-booking.component.scss'
})
export class EditBookingComponent {
  bookingForm: FormGroup;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    email: 'test@example.com',
    gender: 'female',
    mobile: '123456789',
    city: 'Surat',
    checkIn: '2020-02-17T14:22:18Z',
    checkOut: '2020-02-19T14:22:18Z',
    totalPerson: '3',
    roomType: 'Delux',
    package: 'Business',
    address: '101, Elanxa, New Yourk',
    uploadFile: '',
    note: 'test commit',
  };
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      first: [
        this.formdata.first,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      last: [this.formdata.last],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      city: [this.formdata.city],
      checkIn: [this.formdata.checkIn, [Validators.required]],
      checkOut: [this.formdata.checkOut, [Validators.required]],
      totalPerson: [this.formdata.totalPerson, [Validators.required]],
      package: [this.formdata.package, [Validators.required]],
      roomType: [this.formdata.roomType, [Validators.required]],
      address: [this.formdata.address],
      uploadFile: [this.formdata.uploadFile],
      note: [this.formdata.note],
    });
  }
}
