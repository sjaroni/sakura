import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

//export const routes: Routes = [];

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent }
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];