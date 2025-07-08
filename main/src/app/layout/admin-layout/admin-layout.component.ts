import {
  Component,
  OnDestroy,
  ViewChild,
  HostBinding,
  Inject,
  Optional,
  ViewEncapsulation,
  Renderer2,
  DOCUMENT
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import {
  MatSidenav,
  MatSidenavContent,
  MatSidenavModule,
} from '@angular/material/sidenav';

import { AppDirectionality } from '@shared';
import { SettingsService } from '@core/services/settings.service';
import { AppSettings } from '@core/models/settings';
import { CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from '../footer/footer.component';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { SidebarNoticeComponent } from '../sidebar-notice/sidebar-notice.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { NgProgressComponent } from 'ngx-progressbar';
import { FeatherModule } from 'angular-feather';
import { CustomizerComponent } from '@layout/customizer/customizer.component';

const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY =
  'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass,
    BidiModule,
    NgProgressComponent,
    HeaderComponent,
    MatSidenavModule,
    SidebarComponent,
    CustomizerComponent,
    SidebarNoticeComponent,
    TopmenuComponent,
    RouterOutlet,
    FooterComponent,
    MatTooltipModule,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
    FeatherModule,
  ],
})
export class AdminLayoutComponent implements OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @ViewChild('content', { static: true }) content!: MatSidenavContent;

  @ViewChild('rightSideNav') rightSideNav: any;

  isShowing?: boolean = false;
  options = this.settings.getOptions();

  dragging = false;
  isHovered = false;

  toggleSideNavSetOut?: string = '';

  private layoutChangesSubscription = Subscription.EMPTY;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  private isMobileScreen = false;

  @HostBinding('class.content-width-fix') get contentWidthFix() {
    return (
      this.isContentWidthFixed &&
      this.options.navPos === 'side' &&
      this.options.sidenavOpened &&
      !this.isOver
    );
  }

  private isContentWidthFixed = true;

  @HostBinding('class.sidenav-collapsed-fix') get collapsedWidthFix() {
    return (
      this.isCollapsedWidthFixed &&
      (this.options.navPos === 'top' ||
        (this.options.sidenavOpened && this.isOver))
    );
  }

  private isCollapsedWidthFixed = false;

  private htmlElement!: HTMLHtmlElement;

  constructor(
    private router: Router,
    private mediaMatcher: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    private settings: SettingsService,
    private renderer: Renderer2,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Inject(Directionality) public dir: AppDirectionality
  ) {
    this.dir.value = this.options.dir;
    this.document.body.dir = this.dir.value;

    this.htmlElement = this.document.querySelector('html')!;

    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes
        this.options.sidenavOpened = true;

        this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
        this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
        this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        if (this.isOver) {
          this.sidenav.close();
        }
        this.content.scrollTo({ top: 0 });
      });

    // Initialize project theme with options
    this.receiveOptions(this.options);
  }

  toggleSideNavSetIn(toggleSideNavGet: string) {
    if (this.rightSideNav.opened === false) {
      this.toggleSideNavSetOut = toggleSideNavGet;
      this.rightSideNav.toggle();
    } else if (
      this.rightSideNav.opened === true &&
      this.toggleSideNavSetOut != toggleSideNavGet
    ) {
      this.toggleSideNavSetOut = toggleSideNavGet;
    } else {
      this.rightSideNav.toggle();
    }
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }

  // TODO: Trigger when transition end
  resetCollapsedState(timer = 400) {
    setTimeout(() => this.settings.setOptions(this.options), timer);
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
    this.options.sidenavOpened = isOpened;
    this.settings.setOptions(this.options);
  }
  // Demo purposes only

  receiveOptions(options: AppSettings): void {
    this.options = options;
    this.settings.setOptions(options);
    this.toggleDarkTheme(options);
    this.toggleDirection(options);
    this.toggleColor(options);
  }

  toggleDarkTheme(options: AppSettings) {
    if (options.theme === 'dark') {
      this.renderer.addClass(document.body, 'dark');
      this.renderer.removeClass(document.body, 'light');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
    }
  }

  toggleDirection(options: AppSettings) {
    this.dir.value = options.dir;
    this.document.body.dir = this.dir.value;
  }
  toggleColor(options: AppSettings) {
    const existingClasses = document.body.classList;
    const condition = 'theme-';
    existingClasses.forEach((className) => {
      if (className.startsWith(condition)) {
        this.renderer.removeClass(document.body, className);
      }
    });
    this.renderer.addClass(document.body, 'theme-' + options.color);
  }

  onDragStart(event: CdkDragStart) {
    this.dragging = true;
  }
}
