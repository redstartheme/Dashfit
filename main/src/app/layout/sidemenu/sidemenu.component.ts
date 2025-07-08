import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuService } from '@core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { NavAccordionToggleDirective } from './nav-accordion-toggle.directive';
import { MatRippleModule } from '@angular/material/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NavAccordionItemDirective } from './nav-accordion-item.directive';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NavAccordionDirective } from './nav-accordion.directive';
import { NgTemplateOutlet, AsyncPipe, CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgTemplateOutlet,
        NavAccordionDirective,
        NgxPermissionsModule,
        NavAccordionItemDirective,
        RouterLinkActive,
        MatRippleModule,
        RouterLink,
        NavAccordionToggleDirective,
        MatIconModule,
        AsyncPipe,
        TranslateModule,
        FeatherModule,
        CommonModule,
    ]
})
export class SidemenuComponent {
  // Note: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;

  constructor(private menu: MenuService) {}
}
