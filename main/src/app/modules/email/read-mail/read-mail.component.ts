import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
    selector: 'app-read-mail',
    imports: [PageHeaderComponent, MatButtonModule, MatIconModule, MatCardModule],
    templateUrl: './read-mail.component.html',
    styleUrl: './read-mail.component.scss'
})
export class ReadMailComponent {}
