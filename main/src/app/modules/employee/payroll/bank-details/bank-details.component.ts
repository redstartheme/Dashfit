
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
    selector: 'app-bank-details',
    imports: [
        PageHeaderComponent,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule
    ],
    templateUrl: './bank-details.component.html',
    styleUrl: './bank-details.component.scss'
})
export class BankDetailsComponent {
  bankDetailsForm?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.bankDetailsForm = this.fb.group({
      accountHolderName: ['', [Validators.required]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      bankName: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.bankDetailsForm?.valid) {
      console.log('Form Data:', this.bankDetailsForm.value);
      // Handle form submission, e.g., call a service to save data
    } else {
      console.log('Form is invalid');
    }
  }
}
