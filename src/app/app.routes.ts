import { Routes } from '@angular/router';
import { Tab1Page } from './tab1/weekly-top-sellers.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs/tab1',
    component: Tab1Page
  }
];
