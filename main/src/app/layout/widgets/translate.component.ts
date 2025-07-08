import { Component, ViewEncapsulation } from '@angular/core';
import { SettingsService } from '@core/services/settings.service';
import { TranslateService } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '@shared';

@Component({
    selector: 'app-translate',
    encapsulation: ViewEncapsulation.None,
    template: `
    <button
      class="m-4"
      mat-icon-button
      [matMenuTriggerFor]="languagemenu"
      class="lang-dropdown"
    >
      @if (flagvalue !== undefined) {
      <img src="{{ flagvalue }}" alt="image" />
      } @if (flagvalue === undefined) {
      <img src="{{ defaultFlag }}" alt="image" />
      }
    </button>
    <mat-menu #languagemenu="matMenu" class="languageMenu">
      @for (item of listLang; track item) {
      <div>
        <button
          mat-menu-item
          class="dropdown-item"
          (click)="setLanguage(item.text, item.lang, item.flag)"
          [ngClass]="{ active: langStoreValue === item.lang }"
        >
          <img src="{{ item.flag }}" class="flag-img" height="12" alt="image" />
          <span class="f-s-14">{{ item.text }}</span>
        </button>
      </div>
      }
    </mat-menu>
  `,
    styles: [
        `
      .lang-dropdown {
        background-color: rgba(0, 0, 0, 0);
        img {
          height: 17px;
          border-radius: 3px;
        }
      }
      .flag-img {
        margin: 0 10px 0 0;
        height: 15px;
        border-radius: 3px;
        vertical-align: middle;
        [dir='rtl'] & {
          margin: 0 0 0 10px;
        }
      }
      .languageMenu {
        background-color: #ffffff !important;
        border: 1px solid #e4e1ec;
      }
      .dark {
        .languageMenu {
          background-color: #121721 !important;
          border: 1px solid #232b3e;
        }
      }
    `,
    ],
    imports: [MatButtonModule, MatMenuModule, NgClass]
})
export class TranslateComponent {
  flagvalue: string | string[] | undefined;
  defaultFlag?: string;
  langStoreValue?: string;
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en-US' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.svg', lang: 'es-ES' },
    { text: 'German', flag: 'assets/images/flags/germany.svg', lang: 'de-DE' },
  ];

  constructor(
    private translate: TranslateService,
    private settings: SettingsService,
    private store: LocalStorageService
  ) {
    translate.addLangs(['en-US', 'de-DE', 'es-ES']);

    this.langStoreValue = store.get('lang') as string;
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = 'assets/images/flags/us.svg';
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
      this.translate.use(this.langStoreValue);
    }
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.flagvalue = flag;
    this.translate.use(lang);
    this.langStoreValue = lang;
    this.settings.setLanguage(lang);
    this.store.set('lang', lang);
  }
}
