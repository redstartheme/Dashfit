
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export interface CompanyStrengthItem {
  skill: string;
  progress: number;
  color?: 'primary' | 'accent' | 'warn';
  team: string[];
}

@Component({
  selector: 'app-company-streangth',
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './company-streangth.component.html',
  styleUrl: './company-streangth.component.scss',
})
export class CompanyStreangthComponent {
  @Input() strengths: CompanyStrengthItem[] = [];
}
