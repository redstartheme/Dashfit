import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
    selector: 'app-permissions-role-switching',
    templateUrl: './role-switching.component.html',
    styleUrls: ['./role-switching.component.scss'],
    imports: [MatButtonToggleModule, ReactiveFormsModule, FormsModule, JsonPipe]
})
export class PermissionsRoleSwitchingComponent implements OnInit, OnDestroy {
  currentRole!: string;

  currentPermissions!: string[];

  permissionsOfRole: any = {
    ADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
    EMPLOYEE: ['canAdd', 'canEdit', 'canRead'],
  };

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private rolesSrv: NgxRolesService,
    private permissionsSrv: NgxPermissionsService
  ) {}

  ngOnInit() {
    this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
    this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());

    this.rolesSrv.roles$.pipe(takeUntil(this._destroy$)).subscribe((roles) => {
      console.log(roles);
    });
    this.permissionsSrv.permissions$
      .pipe(takeUntil(this._destroy$))
      .subscribe((permissions) => {
        console.log(permissions);
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(
      this.currentRole,
      this.currentPermissions
    );
  }
}
