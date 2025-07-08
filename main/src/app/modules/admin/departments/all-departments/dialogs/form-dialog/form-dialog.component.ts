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
import { AllDepartments } from '../../all-departments.model';
import { AllDepartmentService } from '../../all-departments.service';

export interface DialogData {
  id: number;
  action: string;
  allDepartments: AllDepartments;
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
  allDepartmentsForm: FormGroup;
  allDepartments: AllDepartments;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public allDepartmentService: AllDepartmentService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.allDepartments.dName;
      this.allDepartments = data.allDepartments;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as AllDepartments;
      this.allDepartments = new AllDepartments(blankObject);
    }
    this.allDepartmentsForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required,
    // Validators.name,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('name')
      ? 'Not a valid name'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.allDepartments.id],
      img: [this.allDepartments.img],
      hod: [this.allDepartments.hod, [Validators.required]],
      dName: [this.allDepartments.dName],
      email: [this.allDepartments.email],
      mobile: [this.allDepartments.mobile, [Validators.required]],
      totalStaff: [this.allDepartments.totalStaff],
    });
  }
  submit() {
    if (this.allDepartmentsForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.allDepartmentService.updateDepartment(
          this.allDepartmentsForm.getRawValue()
        );
      } else {
        // Add new laundry service
        this.allDepartmentService.addDepartment(
          this.allDepartmentsForm.getRawValue()
        );
      }
      this.dialogRef.close(this.allDepartmentsForm.getRawValue());
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
