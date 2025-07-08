import {
  Component,
  HostBinding,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLinkActive,
  RouterLink,
} from '@angular/router';
import { Menu, MenuService } from '@core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { TopmenuPanelComponent } from './topmenu-panel.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgTemplateOutlet, AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatherModule } from 'angular-feather';

export interface TopmenuState {
  active: boolean;
  route: string;
}

@Component({
    selector: 'app-topmenu',
    templateUrl: './topmenu.component.html',
    styleUrls: ['./topmenu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatTabsModule,
        NgxPermissionsModule,
        MatButtonModule,
        RouterLinkActive,
        RouterLink,
        NgTemplateOutlet,
        MatMenuModule,
        TopmenuPanelComponent,
        MatIconModule,
        AsyncPipe,
        TranslateModule,
        FeatherModule,
        CommonModule,
    ]
})
export class TopmenuComponent implements OnDestroy {
  @HostBinding('class') class = 'topmenu';

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;

  menuList: Menu[] = [];
  menuStates: TopmenuState[] = [];

  private menuSubscription = Subscription.EMPTY;
  private routerSubscription = Subscription.EMPTY;

  constructor(private menu: MenuService, private router: Router) {
    this.menuSubscription = this.menu$.subscribe((res) => {
      this.menuList = res;
      this.menuList.forEach((item) => {
        this.menuStates.push({
          active: this.router.url.split('/').includes(item.route),
          route: item.route,
        });
      });
    });
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  onRouteChange(rla: RouterLinkActive, index: number) {
    this.routerSubscription.unsubscribe();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        this.menuStates.forEach((item) => (item.active = false));
        setTimeout(() => (this.menuStates[index].active = rla.isActive));
      });
  }
}
