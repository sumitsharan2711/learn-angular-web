import { Routes } from '@angular/router';
import { Chapter01SetupComponent } from './modules/module-01-foundations/chapter-01-setup/chapter-01-setup.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'learning/chapter-01'
  },
  {
    path: 'learning/chapter-01',
    component: Chapter01SetupComponent,
    title: 'Chapter 1 - Project Setup'
  },
  {
    path: '**',
    redirectTo: 'learning/chapter-01'
  }
];
