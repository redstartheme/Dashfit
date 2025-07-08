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
    selector: 'app-add-room',
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
    templateUrl: './add-room.component.html',
    styleUrl: './add-room.component.scss'
})
export class AddRoomComponent {
  roomForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      meal: ['', [Validators.required]],
      roomNo: ['', [Validators.required]],
      acNonac: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      rent: [''],
      capacity: ['', [Validators.required]],
      status: [''],
      uploadFile: [''],
      note: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }
}
