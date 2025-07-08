import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'dual-sidenav',
    templateUrl: 'dual-sidenav.html',
    styleUrls: ['shared.scss', 'dual-sidenav.scss'],
    host: { class: 'demo-sidenav-app' },
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        RouterLink,
    ]
})
export class SidenavDualComponent {
  constructor(private snackbar: MatSnackBar) {}

  play(list: string) {
    this.snackbar.open(`Playing "${list}"`, '', { duration: 1000 });
  }
}
