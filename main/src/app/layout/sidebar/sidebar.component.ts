import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { UserPanelComponent } from '../widgets/user-panel/user-panel.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrandingComponent } from '../widgets/branding.component';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        BrandingComponent,
        MatButtonModule,
        MatIconModule,
        NgClass,
        NgScrollbar,
        UserPanelComponent,
        SidemenuComponent,
        FeatherModule,
    ]
})
export class SidebarComponent {
  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;
  @Input() toggleChecked = false;

  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() closeSidenav = new EventEmitter<void>();

  innerHeight = window.innerHeight;
  height = innerHeight - 65;
  listMaxHeight = this.height + '';
}
