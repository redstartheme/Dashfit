import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

type GaugeValues = Record<number, number>;
@Component({
    selector: 'app-guage',
    templateUrl: './guage.component.html',
    styleUrls: ['./guage.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        NgxGaugeModule,
        MatButtonModule,
    ]
})
export class GuageComponent {
  gaugeValue = 68;
  gaugeSize = 120;
  guageThick = 5;

  dynamicGaugeDemoValue = 10.2;

  constructor() {
    this.percentageValue = function (value: number): string {
      return `${Math.round(value)}`;
    };
  }

  percentageValue: (value: number) => string;
  gaugeValues: GaugeValues = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50,
  };

  onUpdateClick() {
    this.dynamicGaugeDemoValue = Math.round(Math.random() * 1000) / 10;
  }

  markerConfig = {
    '0': { color: '#555', size: 8, label: '0', type: 'line' },
    '15': { color: '#555', size: 4, type: 'line' },
    '30': { color: '#555', size: 8, label: '30', type: 'line' },
    '40': { color: '#555', size: 4, type: 'line' },
    '50': { color: '#555', size: 8, label: '50', type: 'line' },
    '60': { color: '#555', size: 4, type: 'line' },
    '70': { color: '#555', size: 8, label: '70', type: 'line' },
    '85': { color: '#555', size: 4, type: 'line' },
    '100': { color: '#555', size: 8, label: '100', type: 'line' },
  };
}
