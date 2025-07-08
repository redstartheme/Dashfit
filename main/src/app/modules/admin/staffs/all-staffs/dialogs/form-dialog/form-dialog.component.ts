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
import { AllStaffs } from '../../all-staffs.model';
import { AllStaffService } from '../../all-staffs.service';

export interface DialogData {
  id: number;
  action: string;
  allStaffs: AllStaffs;
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
  allStaffsForm: FormGroup;
  allStaffs: AllStaffs;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public allStaffService: AllStaffService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.allStaffs.name;
      this.allStaffs = data.allStaffs;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as AllStaffs;
      this.allStaffs = new AllStaffs(blankObject);
    }
    this.allStaffsForm = this.createContactForm();
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
      id: [this.allStaffs.id],
      img: [this.allStaffs.img],
      date: [this.allStaffs.date, [Validators.required]],
      name: [this.allStaffs.name, [Validators.required]],
      designation: [this.allStaffs.designation],
      email: [this.allStaffs.email],
      mobile: [this.allStaffs.mobile, [Validators.required]],
      address: [this.allStaffs.address],
    });
  }
  submit() {
    if (this.allStaffsForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.allStaffService.updateStaff(this.allStaffsForm.getRawValue());
      } else {
        // Add new laundry service
        this.allStaffService.addStaff(this.allStaffsForm.getRawValue());
      }
      this.dialogRef.close(this.allStaffsForm.getRawValue());
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
