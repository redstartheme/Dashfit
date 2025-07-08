import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        JsonPipe,
    ]
})
export class DatepickerComponent {
  birthday!: Date;
  maxBirthday = new Date();

  paymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
  minPaymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);

  departDate!: Date;
  returnDate!: Date;
  minTripDate = new Date();
  maxTripDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  startTripDate = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);

  appointmentDate!: Date;
  minAppointmentDate = new Date();
  maxAppointmentDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  weekdaysOnly = (d: Date | null) => {
    if (d === null) {
      return true;
    }
    return d.getDay() !== 0 && d.getDay() !== 6;
  };

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
