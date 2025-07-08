import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sidebar-notice',
    templateUrl: './sidebar-notice.component.html',
    styleUrls: ['./sidebar-notice.component.scss'],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
    ]
})
export class SidebarNoticeComponent {
  isChecked? = true;
}
