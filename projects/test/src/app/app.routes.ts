import { Routes } from '@angular/router';

export const routes: Routes = [ {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
      path: 'home',
      data:{
        breadcrumb: 'breadcrumb.home'
      },
      loadComponent:  () => import('./theme-demo/theme-demo.component').then(m => m.ThemeDemoComponent)
  }];
