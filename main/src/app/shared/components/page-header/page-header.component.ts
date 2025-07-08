import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  HostBinding,
} from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MenuService } from '@core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [BreadcrumbComponent, TranslateModule]
})
export class PageHeaderComponent implements OnInit {
  @HostBinding('class') class = 'page-header';

  @Input() title = '';
  @Input() subtitle = '';
  @Input() nav: string[] = [];
  @Input()
  get hideBreadcrumb() {
    return this._hideBreadCrumb;
  }
  set hideBreadcrumb(value: boolean) {
    this._hideBreadCrumb = coerceBooleanProperty(value);
  }
  private _hideBreadCrumb = false;

  constructor(private router: Router, private menu: MenuService) {}

  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];

    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }

    this.title = this.title || this.nav[this.nav.length - 1];
  }

  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }

  static ngAcceptInputType_hideBreadcrumb: BooleanInput;
}
