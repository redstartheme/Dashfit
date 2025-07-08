import {
  Component,
  Output,
  EventEmitter,
  Input,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import screenfull from 'screenfull';
import { UserComponent } from '../widgets/user.component';
import { NotificationComponent } from '../widgets/notification/notification.component';
import { TranslateComponent } from '../widgets/translate.component';
import { BrandingComponent } from '../widgets/branding.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BrandingComponent,
        TranslateComponent,
        NotificationComponent,
        UserComponent,
        FeatherModule,
    ]
})
export class HeaderComponent {
  @HostBinding('class') class = 'header';

  @Input() showToggle = true;
  @Input() showBranding = false;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
