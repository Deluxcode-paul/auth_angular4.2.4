import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent }     from './dashboard.component';

import { AuthGuard }             from '../_guards/index';
import { AuthenticationService } from '../_services/authentication.service';
import { SidebarComponent }      from './parts/sidebar/sidebar.component';
import { HeaderComponent }       from './parts/header/header.component';

import { SharedModule } from '../_shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
  ]
})
export class DashboardModule { }
