import { LocalStorageService } from './../../shared/services/storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: LocalStorageService
  ) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.canActivate(route, state);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const roleArray = this.store.get('roleNames') || [''];
    const roles: string = route.data['role'];

    let inroll;
    let rolesArray: string[];
    if (roles) {
      if (String(roles).split(',').length > 1) {
        rolesArray = String(roles).split(',');
      } else {
        rolesArray = Array.from(roles);
      }

      for (const role of rolesArray) {
        if (roleArray && roleArray.includes(role)) {
          inroll = true;
          break;
        } else {
          inroll = false;
        }
      }
      if (this.authService.check()) {
        if (!inroll) {
          this.router.navigate(['/auth/login']);
          return false;
        }
      }
    }
    return true;
  }
}
