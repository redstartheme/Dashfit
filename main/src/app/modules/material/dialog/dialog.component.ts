/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    imports: [PageHeaderComponent, MatCardModule, MatButtonModule]
})
export class DialogComponent {
  fruitSelectedOption = '';

  constructor(public dialog: MatDialog) {}

  openFruitDialog() {
    const dialogRef = this.dialog.open(DialogFruitComponent);
    dialogRef
      .afterClosed()
      .subscribe((result) => (this.fruitSelectedOption = result));
  }

  openNeptuneDialog() {
    this.dialog.open(DialogNeptuneComponent);
  }

  openAddressDialog() {
    this.dialog.open(DialogAddressFormComponent);
  }
  openBasicDialog() {
    this.dialog.open(DialogBasicComponent);
  }
}

// Dialog
@Component({
    selector: 'dialog-fruit',
    templateUrl: 'dialog-fruit.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class DialogFruitComponent {}

@Component({
    selector: 'dialog-neptune-dialog',
    templateUrl: './dialog-neptune.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class DialogNeptuneComponent {
  constructor(public dialog: MatDialog) {}

  showInStackedDialog() {
    this.dialog.open(DialogNeptuneIFrameComponent);
  }
}

@Component({
    selector: 'dialog-neptune-iframe-dialog',
    styles: [
        `
      iframe {
        width: 800px;
      }
    `,
    ],
    templateUrl: './dialog-neptune-iframe.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class DialogNeptuneIFrameComponent {}

@Component({
    selector: 'dialog-address-form',
    styles: [
        `
      .demo-full-width {
        width: 100%;
      }
    `,
    ],
    templateUrl: 'dialog-address-form.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class DialogAddressFormComponent {}

@Component({
    selector: 'dialog-basic',
    templateUrl: 'dialog-basic.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class DialogBasicComponent {}
