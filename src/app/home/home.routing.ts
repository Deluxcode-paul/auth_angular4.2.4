import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './home.component';
import { SignupComponent }      from './signup/signup.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent }
];

export const Routing = RouterModule.forChild(homeRoutes);