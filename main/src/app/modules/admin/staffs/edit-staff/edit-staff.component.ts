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
    selector: 'app-edit-staff',
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
    templateUrl: './edit-staff.component.html',
    styleUrl: './edit-staff.component.scss'
})
export class EditStaffComponent {
  staffForm: FormGroup;
  formdata = {
    name: 'Bertie Jones',
    designation: 'Cook',
    mobile: '123456789',
    email: 'test@email.com',
    date: '2018-02-12T14:22:18Z',
    address: '22,tilak appt. surat',
    uploadFile: '',
    note: 'test commit',
  };
  constructor(private fb: FormBuilder) {
    this.staffForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.staffForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      date: [this.formdata.date],
      designation: [this.formdata.designation, [Validators.required]],
      name: [this.formdata.name, [Validators.required]],
      email: [this.formdata.email, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      address: [this.formdata.address, [Validators.required]],
      uploadFile: [this.formdata.uploadFile],
      note: [this.formdata.note],
    });
  }
}
