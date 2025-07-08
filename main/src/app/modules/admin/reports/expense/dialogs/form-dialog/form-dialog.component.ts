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
import { ExpenseService } from '../../expense.service';
import { Expense } from '../../expense.model';

export interface DialogData {
  id: number;
  action: string;
  expense: Expense;
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
  expenseForm: FormGroup;
  expense: Expense;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public expenseService: ExpenseService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.expense.expense;
      this.expense = data.expense;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as Expense;
      this.expense = new Expense(blankObject);
    }
    this.expenseForm = this.createContactForm();
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
      id: [this.expense.id],
      img: [this.expense.img],
      name: [this.expense.name],
      date: [this.expense.date],
      expense: [this.expense.expense],
      status: [this.expense.status],
      amount: [this.expense.amount],
      pmode: [this.expense.pmode],
      paidTo: [this.expense.paidTo],
      invoiceNo: [this.expense.invoiceNo],
    });
  }
  submit() {
    if (this.expenseForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.expenseService.updateExpense(this.expenseForm.getRawValue());
      } else {
        // Add new laundry service
        this.expenseService.addExpense(this.expenseForm.getRawValue());
      }
      this.dialogRef.close(this.expenseForm.getRawValue());
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
