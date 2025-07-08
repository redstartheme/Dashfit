import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  imports: [
    PageHeaderComponent,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class SlideToggleComponent {
  emailToggle = true;
  termsToggle = false;
  musicToggle = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {}

  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  onFormSubmit() {
    this.snackBar.open('Terms and condistions accepted!', '', {
      duration: 2000,
    });
  }
}
