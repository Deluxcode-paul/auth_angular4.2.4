import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { Routing }       from './home.routing';

import { HomeComponent }   from './home.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuard }             from '../_guards/index';
import { AuthenticationService } from '../_services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Routing
  ],
  declarations: [
    HomeComponent,
    SignupComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})

export class HomeModule {
  constructor() {}
}
