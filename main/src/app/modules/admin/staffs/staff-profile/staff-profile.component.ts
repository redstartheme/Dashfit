import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
    selector: 'app-staff-profile',
    encapsulation: ViewEncapsulation.None,
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
    ],
    templateUrl: './staff-profile.component.html',
    styleUrl: './staff-profile.component.scss'
})
export class StaffProfileComponent {}
