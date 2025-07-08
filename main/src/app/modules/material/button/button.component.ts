import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        RouterLink,
    ]
})
export class ButtonComponent {
  counter = 0;

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  increase() {
    this.counter++;
    this.openSnackBar(`Click counter is set to ${this.counter}`);
  }
}
