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
import { RoomTypes } from '../../room-types.model';
import { RoomTypesService } from '../../room-types.service';

export interface DialogData {
  id: number;
  action: string;
  roomTypes: RoomTypes;
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
  roomTypesForm: FormGroup;
  roomTypes: RoomTypes;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public roomTypesService: RoomTypesService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Room #' + data.roomTypes.roomNo;
      this.roomTypes = data.roomTypes;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as RoomTypes;
      this.roomTypes = new RoomTypes(blankObject);
    }
    this.roomTypesForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required,
    // Validators.roomNo,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('roomNo')
      ? 'Not a valid roomNo'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.roomTypes.id],
      img: [this.roomTypes.img],
      shortCode: [this.roomTypes.shortCode, [Validators.required]],
      roomNo: [this.roomTypes.roomNo, [Validators.required]],
      acNonac: [this.roomTypes.acNonac, [Validators.required]],
      roomType: [this.roomTypes.roomType, [Validators.required]],
      rent: [this.roomTypes.rent, [Validators.required]],
      capacity: [this.roomTypes.capacity, [Validators.required]],
      status: [this.roomTypes.status, [Validators.required]],
    });
  }
  submit() {
    if (this.roomTypesForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.roomTypesService.updateRoomTypes(this.roomTypesForm.getRawValue());
      } else {
        // Add new laundry service
        this.roomTypesService.addRoomTypes(this.roomTypesForm.getRawValue());
      }
      this.dialogRef.close(this.roomTypesForm.getRawValue());
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
