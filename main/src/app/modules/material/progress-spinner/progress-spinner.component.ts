import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        ReactiveFormsModule,
        FormsModule,
        MatSliderModule,
    ]
})
export class ProgressSpinnerComponent {
  portionValue = 60;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
