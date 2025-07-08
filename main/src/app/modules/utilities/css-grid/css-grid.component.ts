import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-css-grid',
    templateUrl: './css-grid.component.html',
    styleUrls: ['./css-grid.component.scss'],
    imports: [PageHeaderComponent, RouterLink, MatCardModule]
})
export class CssGridComponent {}
