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
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-edit-department',
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
    MatButtonModule,
  ],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.scss',
})
export class EditDepartmentComponent {
  departmentForm: FormGroup;
  formdata = {
    hod: 'Bertie Jones',
    dName: 'Accounts',
    mobile: '123456789',
    email: 'test@email.com',
    totalStaff: '22',
    note: 'test commit',
  };
  constructor(private fb: FormBuilder) {
    this.departmentForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.departmentForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      dName: [this.formdata.dName, [Validators.required]],
      hod: [this.formdata.hod, [Validators.required]],
      email: [this.formdata.email, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      totalStaff: [this.formdata.totalStaff, [Validators.required]],
      note: [this.formdata.note],
    });
  }
}
