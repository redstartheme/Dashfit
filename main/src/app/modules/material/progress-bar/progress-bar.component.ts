import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        ReactiveFormsModule,
        FormsModule,
        MatSliderModule,
    ]
})
export class ProgressBarComponent {
  surveyProgress = 30;
  videoPlayValue = 20;
  videoBufferValue = 60;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
