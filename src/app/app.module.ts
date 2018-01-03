import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { BrowserModule }                from '@angular/platform-browser';
import { LOCALE_ID, NgModule }          from '@angular/core';
import { HttpModule }                   from '@angular/http';
import { FormsModule }                  from '@angular/forms';

import { AppComponent }          from './app.component';

import { Routing }               from './app.routing';

// Auth System Init
import { AuthGuard }             from './_guards/index';
import { AuthenticationService } from './_services/authentication.service';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  providers: [ AuthGuard, AuthenticationService, { provide: LOCALE_ID, useValue: 'ru' } ],
  bootstrap: [AppComponent]
})

export class AppModule { }
