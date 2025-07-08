/* eslint-disable @angular-eslint/component-selector */
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
    ]
})
export class SnackBarComponent {
  durationInSeconds = 5;
  constructor(private snackBar: MatSnackBar) {}

  openDiscoPartySnackBar() {
    this.snackBar.open('Disco party!', 'Dismiss', { duration: 5000 });
  }

  openNotificationSnackBar() {
    this.snackBar.open('Thank you for your support!', '', { duration: 2000 });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openCustomSnackBar() {
    this.snackBar.openFromComponent(SnackBarCustomComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBar() {
    this.snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

@Component({
    selector: 'snack-bar-custom',
    templateUrl: 'snack-bar-custom.html',
    styles: [
        `
      :host {
        display: flex;
      }

      .example-pizza-party {
        color: hotpink;
      }
    `,
    ],
    imports: [MatButtonModule, MatSnackBarModule]
})
export class SnackBarCustomComponent {
  snackBarRef = inject(MatSnackBarRef);
}
