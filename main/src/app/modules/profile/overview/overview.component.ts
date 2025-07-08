import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
    selector: 'app-overview',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss',
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
    ]
})
export class OverviewComponent {}
