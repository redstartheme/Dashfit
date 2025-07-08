import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
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
import { Cab } from '../../cab-list.model';
import { CabService } from '../../cab-list.service';

export interface DialogData {
  id: number;
  action: string;
  cab: Cab;
}

@Component({
  selector: 'app-cab-form-dialog',
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
export class CabFormDialogComponent {
  action: string;
  dialogTitle: string;
  cabForm: FormGroup;
  cab: Cab;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<CabFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public cabService: CabService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = `Edit Cab ${data.cab.licensePlate}`;
      this.cab = data.cab;
    } else {
      this.dialogTitle = 'New Cab Record';
      const blankObject = {} as Cab;
      this.cab = new Cab(blankObject);
    }
    this.cabForm = this.createCabForm();
  }

  createCabForm(): FormGroup {
    return this.fb.group({
      id: [this.cab.id],
      driverName: [this.cab.driverName, Validators.required],
      driverContact: [
        this.cab.driverContact,
        [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)],
      ],
      cabModel: [this.cab.cabModel],
      licensePlate: [this.cab.licensePlate],
      status: [this.cab.status],
      capacity: [this.cab.capacity],
      lastServiceDate: [this.cab.lastServiceDate],
      location: [this.cab.location],
      assignedToGuest: [this.cab.assignedToGuest],
      bookingCount: [this.cab.bookingCount],
      rating: [this.cab.rating],
      notes: [this.cab.notes],
    });
  }

  submit() {
    if (this.cabForm.valid) {
      if (this.action === 'edit') {
        // Update existing cab record
        console.log('row0----' + this.cabForm.getRawValue());
        this.cabService.updateCab(this.cabForm.getRawValue());
      } else {
        // Add new cab record
        this.cabService.addCab(this.cabForm.getRawValue());
      }
      this.dialogRef.close(this.cabForm.getRawValue());
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
