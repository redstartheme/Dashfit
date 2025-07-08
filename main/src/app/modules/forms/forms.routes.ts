import { Route } from '@angular/router';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';
import { ElementsComponent } from './elements/elements.component';
export const FORMS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'elements',
    pathMatch: 'full',
  },
  {
    path: 'elements',
    component: ElementsComponent,
  },
  {
    path: 'examples',
    component: FormExamplesComponent,
  },
  {
    path: 'wizard',
    component: WizardComponent,
  },
  {
    path: 'editors',
    component: EditorsComponent,
  },
];
