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

import { LaundryService } from '../../laundry-services.model';
import { LaundryServiceService } from '../../laundry-services.service';

export interface DialogData {
  action: string;
  laundryService: LaundryService;
}

@Component({
  selector: 'app-laundry-service-form-dialog',
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
export class LaundryServiceFormDialogComponent {
  action: string;
  dialogTitle: string;
  laundryServiceForm: FormGroup;
  laundryService: LaundryService;
  url: string | null = null; // Initialized to null

  constructor(
    public dialogRef: MatDialogRef<LaundryServiceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public laundryServiceService: LaundryServiceService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Room No # ' + data.laundryService.laundryId;
      this.laundryService = data.laundryService;
    } else {
      this.dialogTitle = 'New Record';
      this.laundryService = new LaundryService(); // Ensure default constructor or provide default values
    }
    this.laundryServiceForm = this.createLaundryServiceForm();
  }

  formControl = new FormControl('', [
    Validators.required,
    // Add custom validators if necessary
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  createLaundryServiceForm(): FormGroup {
    return this.fb.group({
      laundryId: [this.laundryService.laundryId],
      guestName: [this.laundryService.guestName],
      roomNumber: [this.laundryService.roomNumber],
      dateReceived: [this.laundryService.dateReceived],
      dateCompleted: [this.laundryService.dateCompleted],
      serviceType: [this.laundryService.serviceType],
      itemDescription: [this.laundryService.itemDescription],
      quantity: [this.laundryService.quantity],
      unitPrice: [this.laundryService.unitPrice],
      totalCost: [this.laundryService.totalCost],
      specialInstructions: [this.laundryService.specialInstructions],
      status: [this.laundryService.status],
      deliveryDate: [this.laundryService.deliveryDate],
      pickupDate: [this.laundryService.pickupDate],
      paymentStatus: [this.laundryService.paymentStatus],
      paymentMethod: [this.laundryService.paymentMethod],
      employeeAssigned: [this.laundryService.employeeAssigned],
      comments: [this.laundryService.comments],
      dateOfLastUpdate: [this.laundryService.dateOfLastUpdate],
      lastUpdatedBy: [this.laundryService.lastUpdatedBy],
    });
  }

  submit() {
    if (this.laundryServiceForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.laundryServiceService.updateLaundryService(
          this.laundryServiceForm.getRawValue()
        );
      } else {
        // Add new laundry service
        this.laundryServiceService.addLaundryService(
          this.laundryServiceForm.getRawValue()
        );
      }
      this.dialogRef.close(this.laundryServiceForm.getRawValue());
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
