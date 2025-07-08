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
import { AllRooms } from '../../all-rooms.model';
import { AllRoomService } from '../../all-rooms.service';

export interface DialogData {
  id: number;
  action: string;
  allRooms: AllRooms;
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
  allRoomsForm: FormGroup;
  allRooms: AllRooms;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public allRoomService: AllRoomService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Room #' + data.allRooms.roomNo;
      this.allRooms = data.allRooms;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as AllRooms;
      this.allRooms = new AllRooms(blankObject);
    }
    this.allRoomsForm = this.createContactForm();
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
      id: [this.allRooms.id],
      img: [this.allRooms.img],
      meal: [this.allRooms.meal, [Validators.required]],
      roomNo: [this.allRooms.roomNo, [Validators.required]],
      acNonac: [this.allRooms.acNonac],
      roomType: [this.allRooms.roomType],
      mobile: [this.allRooms.mobile, [Validators.required]],
      rent: [this.allRooms.rent],
      capacity: [this.allRooms.capacity],
      status: [this.allRooms.status],
    });
  }
  submit() {
    if (this.allRoomsForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.allRoomService.updateRoom(this.allRoomsForm.getRawValue());
      } else {
        // Add new laundry service
        this.allRoomService.addRoom(this.allRoomsForm.getRawValue());
      }
      this.dialogRef.close(this.allRoomsForm.getRawValue());
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
