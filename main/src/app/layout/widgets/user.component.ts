import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core';
import { User } from '@core/models/interface';
import { SettingsService } from '@core/services/settings.service';
import { debounceTime, tap } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-user',
    encapsulation: ViewEncapsulation.None,
    template: `
    <button class="r-full" mat-button [matMenuTriggerFor]="menu">
      <img
        matButtonIcon
        class="avatar r-full"
        [src]="user.avatar"
        width="24"
        alt="avatar"
      />
      <span class="m-x-8">{{ user.name }}</span>
    </button>

    <mat-menu #menu="matMenu" class="profileMenu">
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon class="material-icons-outlined">account_circle</mat-icon>
        <span class="f-s-14">{{ 'profile' | translate }}</span>
      </button>
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon class="material-icons-outlined">edit</mat-icon>
        <span class="f-s-14">{{ 'edit_profile' | translate }}</span>
      </button>
      <button mat-menu-item (click)="restore()">
        <mat-icon class="material-icons-outlined">restore</mat-icon>
        <span class="f-s-14">{{ 'restore_defaults' | translate }}</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon class="material-icons-outlined">exit_to_app</mat-icon>
        <span class="f-s-14">{{ 'logout' | translate }}</span>
      </button>
    </mat-menu>
  `,
    styles: [
        `
      .avatar {
        width: 24px;
        height: 24px;
      }
      .profileMenu {
        background-color: #ffffff !important;
        border: 1px solid #e4e1ec;
      }
      .dark {
        .profileMenu {
          background-color: #121721 !important;
          border: 1px solid #232b3e;
        }
      }
    `,
    ],
    imports: [
        MatButtonModule,
        MatMenuModule,
        RouterLink,
        MatIconModule,
        TranslateModule,
    ]
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(
    private router: Router,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private settings: SettingsService
  ) {}

  ngOnInit(): void {
    this.auth
      .user()
      .pipe(
        tap((user) => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());
  }

  logout() {
    this.auth.logout();
  }

  restore() {
    this.settings.reset();
    window.location.reload();
  }
}
