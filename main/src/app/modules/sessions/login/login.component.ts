import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { TokenService } from '@core';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '@shared';
import { MatCardModule } from '@angular/material/card';
import { SettingsService } from '@core/services/settings.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        RouterLink,
        TranslateModule
    ]
})
export class LoginComponent {
  isSubmitting = false;
  error = '';
  hide = true;
  options = this.settings.getOptions();
  themeStyle = '';

  loginForm = this.fb.nonNullable.group({
    username: ['admin', [Validators.required]],
    password: ['admin', [Validators.required]],
    rememberMe: [false],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private tokenService: TokenService,
    private rolesService: NgxRolesService,
    private store: LocalStorageService,
    private settings: SettingsService
  ) {
    this.themeStyle = this.options.theme;
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  adminSet() {
    this.loginForm.get('username')?.setValue('admin');
    this.loginForm.get('password')?.setValue('admin');
  }
  employeeSet() {
    this.loginForm.get('username')?.setValue('employee');
    this.loginForm.get('password')?.setValue('employee');
  }
  login() {
    this.isSubmitting = true;
    this.auth.login(
      this.username.value,
      this.password.value,
      this.rememberMe.value
    );
  }
}
