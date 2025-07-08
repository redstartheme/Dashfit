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
    selector: 'app-edit-room',
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
    templateUrl: './edit-room.component.html',
    styleUrl: './edit-room.component.scss'
})
export class EditRoomComponent {
  roomForm: FormGroup;
  formdata = {
    meal: 'Lunch',
    roomNo: '102',
    mobile: '123456789',
    rent: '25',
    roomType: 'Delux',
    acNonac: 'AC',
    capacity: '4',
    status: 'Open',
    uploadFile: '',
    note: 'test commit',
  };
  constructor(private fb: FormBuilder) {
    this.roomForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      meal: [this.formdata.meal],
      acNonac: [this.formdata.acNonac, [Validators.required]],
      roomNo: [this.formdata.roomNo, [Validators.required]],
      roomType: [this.formdata.roomType, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      rent: [this.formdata.rent],
      capacity: [this.formdata.capacity, [Validators.required]],
      status: [this.formdata.status],
      uploadFile: [this.formdata.uploadFile],
      note: [this.formdata.note],
    });
  }
}
