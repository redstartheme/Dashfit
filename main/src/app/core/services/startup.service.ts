import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Menu, MenuService } from './menu.service';
import { AuthService } from './auth.service';
import { User } from '@core/models/interface';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private authService: AuthService,
    private rolesService: NgxRolesService,
    private permissonsService: NgxPermissionsService,
    private menuService: MenuService
  ) {}

  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return this.authService
      .change()
      .pipe(
        tap((user) => {
          return this.setPermissions(user);
        }),
        switchMap(() => {
          return this.authService.menu();
        }),
        tap((menu) => {
          this.setMenu(menu);
        })
      )
      .subscribe();
  }

  private setMenu(menu: Menu[]) {
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }

  private setPermissions(user: User) {
    const role: any = {};

    user['role']?.forEach((e: any) => {
      this.permissonsService.loadPermissions(user.permissions!);
      this.rolesService.flushRoles();
      const name = e['name'];
      role[name] = user.permissions;
    });
    this.rolesService.addRolesWithPermissions(role);
  }
}
