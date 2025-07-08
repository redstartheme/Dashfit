import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '@core/models/role';
import { LocalStorageService } from '@shared';

@Component({
  selector: 'app-branding',
  template: `
    <div
      class="d-inline-block text-nowrap r-full text-reset m-l-12 m-r-12"
      (click)="goToHome()"
    >
      <img
        src="./assets/images/logo.png"
        class="brand-logo align-middle m-2"
        alt="logo"
      />
      <span class="brand-name">Dashfit</span>
    </div>
  `,
  styles: [
    `
      .brand-logo {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .brand-name {
        vertical-align: middle;
        font-weight: 500;
        font-size: 20px;
        margin: 0px 8px;
        cursor: pointer;
      }
    `,
  ],
  standalone: true,
})
export class BrandingComponent {
  constructor(private router: Router, private store: LocalStorageService) {}
  goToHome() {
    const currentUser = this.store.get('currentUser');
    const roleName = currentUser.role[0]?.name;
    if (roleName == Role.Admin) {
      this.router.navigate(['dashboard/dashboard1']);
    } else if (roleName == Role.Employee) {
      this.router.navigateByUrl('emp_dashboard/dashboard1');
    }
  }
}
