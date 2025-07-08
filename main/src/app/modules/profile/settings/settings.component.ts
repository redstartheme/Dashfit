import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        FeatherModule,
        MatSlideToggleModule,
        FormsModule,
    ]
})
export class SettingsComponent {
  userImg: any;
  // Personal Details Form
  personalDetails?: FormGroup;
  hide = true;

  // security Form
  securityForm?: FormGroup;
  oldHide = true;
  newHide = true;
  confHide = true;

  // connect form
  connectionForm?: FormGroup;

  isChecked1 = true;
  isChecked2 = false;
  isChecked3 = true;

  constructor(private fb: FormBuilder) {
    this.initPersonalForm();
    this.initSecurityForm();
    this.initConnectionForm();
  }
  initPersonalForm() {
    this.personalDetails = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      mobile: ['', [Validators.required]],
      address: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }
  initSecurityForm() {
    this.securityForm = this.fb.group({
      oldPwd: ['', [Validators.required]],
      newPwd: ['', [Validators.required]],
      confirmPwd: ['', [Validators.required]],
    });
  }
  initConnectionForm() {
    this.connectionForm = this.fb.group({
      fbItem: [''],
      slackItem: [''],
      githubItem: [''],
      xItem: [''],
      twitchItem: [''],
      youtubeItem: [''],
      dribbbleItem: [''],
      linkedInItem: [''],
    });
  }
  onSelectFile2(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.userImg = event.target?.result;
      };
    }
  }

  public delete() {
    this.userImg = null;
  }
}
