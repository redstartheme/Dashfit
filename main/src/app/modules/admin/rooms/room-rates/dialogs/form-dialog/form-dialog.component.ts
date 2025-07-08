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
import { RoomRatesService } from '../../room-rates.service'; // Update with the actual service
import { RoomRates } from '../../room-rates.model'; // Update with the actual model

export interface DialogData {
  id: number;
  action: string;
  roomRates: RoomRates;
}

@Component({
  selector: 'app-room-rates-form-dialog',
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
export class RoomRatesFormDialogComponent {
  action: string;
  dialogTitle: string;
  roomRatesForm: FormGroup;
  roomRates: RoomRates;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<RoomRatesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public roomRatesService: RoomRatesService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.roomRates.roomType; // Adjust property as needed
      this.roomRates = data.roomRates;
    } else {
      this.dialogTitle = 'New Record';
      this.roomRates = {} as RoomRates; // Adjust if necessary
    }
    this.roomRatesForm = this.createRoomRatesForm();
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

  createRoomRatesForm(): FormGroup {
    return this.fb.group({
      id: [this.roomRates.id],
      roomType: [this.roomRates.roomType, [Validators.required]],
      ratePlan: [this.roomRates.ratePlan, [Validators.required]],
      baseRate: [this.roomRates.baseRate, [Validators.required]],
      seasonalRate: [this.roomRates.seasonalRate],
      promotionalRate: [this.roomRates.promotionalRate],
      additionalCharges: [this.roomRates.additionalCharges],
      effectiveDate: [this.roomRates.effectiveDate],
      endDate: [this.roomRates.endDate],
      bookingWindow: [this.roomRates.bookingWindow],
      cancellationPolicy: [this.roomRates.cancellationPolicy],
      minimumStay: [this.roomRates.minimumStay],
      maxOccupancy: [this.roomRates.maxOccupancy],
      status: [this.roomRates.status, [Validators.required]],
    });
  }

  submit() {
    if (this.roomRatesForm.valid) {
      if (this.action === 'edit') {
        // Update existing room rate
        this.roomRatesService.updateRoomRates(this.roomRatesForm.getRawValue());
      } else {
        // Add new room rate
        this.roomRatesService.addRoomRates(this.roomRatesForm.getRawValue());
      }
      this.dialogRef.close(this.roomRatesForm.getRawValue());
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
