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
import { StocksService } from '../../stocks.service';
import { Stocks } from '../../stocks.model';

export interface DialogData {
  id: number;
  action: string;
  stocks: Stocks;
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
  stocksForm: FormGroup;
  stocks: Stocks;
  url: string | null = null; // Initialized to null
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public stockService: StocksService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.stocks.pName;
      this.stocks = data.stocks;
    } else {
      this.dialogTitle = 'New Record';
      const blankObject = {} as Stocks;
      this.stocks = new Stocks(blankObject);
    }
    this.stocksForm = this.createContactForm();
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
      id: [this.stocks.id],
      pCode: [this.stocks.pCode],
      pName: [this.stocks.pName],
      status: [this.stocks.status, [Validators.required]],
      category: [this.stocks.category],
      price: [this.stocks.price, [Validators.required]],
      qty: [this.stocks.qty],
    });
  }
  submit() {
    if (this.stocksForm.valid) {
      if (this.action === 'edit') {
        // Update existing laundry service
        this.stockService.updateStock(this.stocksForm.getRawValue());
      } else {
        // Add new laundry service
        this.stockService.addStock(this.stocksForm.getRawValue());
      }
      this.dialogRef.close(this.stocksForm.getRawValue());
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
