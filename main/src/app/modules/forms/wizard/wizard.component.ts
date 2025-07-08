import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { showError: true },
        },
    ],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatButtonModule,
    ]
})
export class WizardComponent {
  isEditable = false;
  isLinear = false;
  constructor(private formBuilder: FormBuilder) {}

  firstFormGroup: FormGroup = this.formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this.formBuilder.group({ secondCtrl: [''] });

  firstGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });
  secondGroup = this.formBuilder.group({
    address: ['', Validators.required],
  });
}
