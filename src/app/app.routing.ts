import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from './_guards/index';

const appRoutes: Routes = [
    {
      path: '',
      loadChildren: 'app/home/home.module#HomeModule'
    },
    { 
      path: 'dashboard',
      loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);