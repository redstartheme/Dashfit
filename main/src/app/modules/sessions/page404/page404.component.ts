import { Component } from '@angular/core';
import { ErrorCodeComponent } from '../../../shared/components/error-code/error-code.component';

@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styleUrls: ['./page404.component.scss'],
    imports: [ErrorCodeComponent]
})
export class Page404Component {}
