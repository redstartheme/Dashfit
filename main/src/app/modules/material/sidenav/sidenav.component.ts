import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    imports: [PageHeaderComponent, MatCardModule, MatButtonModule, RouterLink]
})
export class SidenavComponent {}
