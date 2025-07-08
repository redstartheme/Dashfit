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
import { RoomCleaning } from '../../room-cleaning.model'; // Update the path as necessary
import { RoomCleaningService } from '../../room-cleaning.service'; // Update the path as necessary

export interface DialogData {
  id: number;
  action: string;
  roomCleaning: RoomCleaning;
}

@Component({
  selector: 'app-room-cleaning-form-dialog',
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
export class RoomCleaningFormDialogComponent {
  action: string;
  dialogTitle: string;
  roomCleaningForm: FormGroup;
  roomCleaning: RoomCleaning;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<RoomCleaningFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public roomCleaningService: RoomCleaningService, // Update the service as necessary
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Room #' + data.roomCleaning.roomNo;
      this.roomCleaning = data.roomCleaning;
    } else {
      this.dialogTitle = 'New Record';
      this.roomCleaning = new RoomCleaning(); // Adjust if RoomCleaning has a default constructor
    }
    this.roomCleaningForm = this.createRoomCleaningForm();
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

  createRoomCleaningForm(): FormGroup {
    return this.fb.group({
      id: [this.roomCleaning.id],
      roomNo: [this.roomCleaning.roomNo, [Validators.required]],
      floor: [this.roomCleaning.floor],
      guestName: [this.roomCleaning.guestName],
      cleaningStatus: [this.roomCleaning.cleaningStatus],
      scheduledDate: [this.roomCleaning.scheduledDate],
      scheduledTime: [this.roomCleaning.scheduledTime],
      assignedStaff: [this.roomCleaning.assignedStaff],
      completionTime: [this.roomCleaning.completionTime],
      notes: [this.roomCleaning.notes],
      priority: [this.roomCleaning.priority],
      cleaningType: [this.roomCleaning.cleaningType],
      lastCleanedDate: [this.roomCleaning.lastCleanedDate],
      frequency: [this.roomCleaning.frequency],
    });
  }

  submit() {
    if (this.roomCleaningForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.roomCleaningService.updateRoomCleaning(
          this.roomCleaningForm.getRawValue()
        );
      } else {
        // Add new laundry service
        this.roomCleaningService.addRoomCleaning(
          this.roomCleaningForm.getRawValue()
        );
      }
      this.dialogRef.close(this.roomCleaningForm.getRawValue());
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.roomCleaningService.addRoomCleaning(
      this.roomCleaningForm.getRawValue()
    );
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
