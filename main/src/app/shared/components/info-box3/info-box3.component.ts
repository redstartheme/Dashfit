import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-info-box3',
  imports: [MatCardModule, CommonModule],
  templateUrl: './info-box3.component.html',
  styleUrl: './info-box3.component.scss',
})
export class InfoBox3Component {
  @Input() infoData: Array<any> = [];
}
