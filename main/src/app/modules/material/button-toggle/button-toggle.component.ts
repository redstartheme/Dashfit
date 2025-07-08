import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class ButtonToggleComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
