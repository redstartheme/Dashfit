import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-card5',
  imports: [MatCardModule, NgApexchartsModule],
  templateUrl: './chart-card5.component.html',
  styleUrl: './chart-card5.component.scss',
})
export class ChartCard5Component {
  @Input() bookingGaugeOptions: any; // Input to receive chart data
  @Input() percentage: string = '';
  @Input() footerText: string = '';
}
