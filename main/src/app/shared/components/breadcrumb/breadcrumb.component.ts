import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '@core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { LocalStorageService } from '@shared/services';
import { Role } from '@core/models/role';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [FeatherIconsComponent, MatIconModule, TranslateModule],
})
export class BreadcrumbComponent implements OnInit {
  @Input() nav: string[] = [];

  constructor(
    private router: Router,
    private menu: MenuService,
    private store: LocalStorageService
  ) {}

  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];

    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
  }

  trackByNavlink(index: number, navLink: string): string {
    return navLink;
  }

  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }
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
