import { Routes } from '@angular/router';
import { Chapter01SetupComponent } from './modules/module-01-foundations/chapter-01-setup/chapter-01-setup.component';
import { Chapter02ComponentsComponent } from './modules/module-01-foundations/chapter-02-components/chapter-02-components.component';

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
    path: 'learning/chapter-02',
    component: Chapter02ComponentsComponent,
    title: 'Chapter 2 - Components in Depth'
  },
  {
    path: '**',
    redirectTo: 'learning/chapter-01'
  }
];
