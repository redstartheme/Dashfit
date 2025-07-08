import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class InputComponent {
  password!: string;
  showPassword = false;
  email!: string;
  value = 'Clear me';

  get passwordType() {
    return this.showPassword ? 'text' : 'password';
  }

  get passwordToggleLabel() {
    return this.showPassword ? 'Hide password' : 'Reveal password';
  }

  get passwordToggleIcon() {
    return this.showPassword ? 'visibility_off' : 'visibility';
  }
}
