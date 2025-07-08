import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { DateAdapter, MatOptionModule } from '@angular/material/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FileUploadComponent } from '../../../shared/components/file-upload/file-upload.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-elements',
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        FileUploadComponent,
        TranslateModule,
    ]
})
export class ElementsComponent implements OnInit, OnDestroy {
  q = {
    username: '',
    email: '',
    gender: '',
  };
  fileUploadForm: UntypedFormGroup;
  labelForm: UntypedFormGroup;
  hideRequiredControl = new UntypedFormControl(false);
  floatLabelControl = new UntypedFormControl('auto');
  reactiveForm1 = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    city: [''],
    address: [''],
    company: [''],
    tele: [''],
    website: [''],
    date: [''],
  });

  reactiveForm2 = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    city: [''],
    address: [''],
    company: [''],
    tele: [''],
    website: [''],
    date: [''],
  });

  translateSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.labelForm = fb.group({
      hideRequired: this.hideRequiredControl,
    });
    this.fileUploadForm = fb.group({
      fileUpload: [''],
    });
  }

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe(
      (res: { lang: any }) => {
        this.dateAdapter.setLocale(res.lang);
      }
    );
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  // getErrorMessage(form: FormGroup<ControlsOf<IProfile>>) {
  //   return form.get('email')?.hasError('required')
  //     ? 'validations.required'
  //     : form.get('email')?.hasError('email')
  //       ? 'validations.invalid_email'
  //       : '';
  // }
}
