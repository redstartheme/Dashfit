import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppSettings } from '@core/models/settings';
import { SettingsService } from '@core/services/settings.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { NgScrollbar } from 'ngx-scrollbar';

interface Colors {
  colorName: string;
  colorCode: string;
  value: string;
}

@Component({
    selector: 'app-customizer',
    templateUrl: './customizer.component.html',
    styleUrls: ['./customizer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgScrollbar,
        ReactiveFormsModule,
        MatRadioModule,
        MatDividerModule,
        MatSlideToggleModule,
    ]
})
export class CustomizerComponent implements OnInit, OnDestroy {
  @Output() optionsChange = new EventEmitter<AppSettings>();

  innerHeight = window.innerHeight;
  height = innerHeight - 110;
  listMaxHeight = this.height + '';

  options = this.settings.getOptions();

  colors: Colors[] = [
    {
      colorName: 'default',
      colorCode: '#6366f1',
      value: 'default',
    },
    {
      colorName: 'purple',
      colorCode: '#9c27b0',
      value: 'purple',
    },
    {
      colorName: 'red',
      colorCode: '#f44336',
      value: 'red',
    },
    {
      colorName: 'green',
      colorCode: '#12a147',
      value: 'green',
    },
    {
      colorName: 'orange',
      colorCode: '#f46b36',
      value: 'orange',
    },
    {
      colorName: 'teal',
      colorCode: '#009688',
      value: 'teal',
    },
    {
      colorName: 'amber',
      colorCode: '#ffc107',
      value: 'amber',
    },
  ];

  // dragging = false;

  form = this.fb.nonNullable.group<AppSettings>({
    theme: 'light',
    showHeader: true,
    color: 'default',
    headerPos: 'fixed',
    showFooter: true,
    footerPos: 'static',
    showUserPanel: true,
    navPos: 'side',
    dir: 'ltr',
    sidenavOpened: true,
    sidenavCollapsed: false,
    language: 'en-US',
  });

  isShowing: boolean | undefined;

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  formSubscription = Subscription.EMPTY;

  get isHeaderPosAbove() {
    return this.form.get('headerPos')?.value === 'above';
  }

  get isNavPosTop() {
    return this.form.get('navPos')?.value === 'top';
  }

  get isShowHeader() {
    return this.form.get('showHeader')?.value === true;
  }
  get isShowFooter() {
    return this.form.get('showFooter')?.value === true;
  }

  constructor(private settings: SettingsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue(this.options);

    this.formSubscription = this.form.valueChanges.subscribe((value) => {
      this.sendOptions(value as AppSettings);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  sendOptions(options: AppSettings) {
    this.optionsChange.emit(options);
  }
}
