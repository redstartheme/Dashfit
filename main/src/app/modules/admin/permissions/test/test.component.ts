import { Component } from '@angular/core';
import { NgxPermissionsService, NgxPermissionsModule } from 'ngx-permissions';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-permissions-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    imports: [NgxPermissionsModule, JsonPipe]
})
export class PermissionsTestComponent {
  comparedPermission: string[] = ['admin'];

  constructor(private permissionsSrv: NgxPermissionsService) {}

  getPermissions() {
    return Object.keys(this.permissionsSrv.getPermissions());
  }

  addPermission() {
    // this.permissionsSrv.loadPermissions(['admin']);
    this.permissionsSrv.addPermission('admin', () => {
      // return false;
      return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => resolve(true), 2000);
      });
    });
  }

  removePermission() {
    this.permissionsSrv.removePermission('admin');
  }

  unAuthorized() {
    console.log('unAuthorized');
  }

  authorized() {
    console.log('authorizes');
  }

  changeToAdmin() {
    this.comparedPermission = ['admin'];
    console.log(this.comparedPermission);
  }

  changeToEmployee() {
    this.comparedPermission = ['employee'];
    console.log(this.comparedPermission);
  }
}
