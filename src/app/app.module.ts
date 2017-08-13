import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JQUERY_PROVIDER } from './common/jQuery.service';
import { NavComponent } from './nav/nav.component';
import {
  StatusListComponent ,
  DisclosurerequestsService
} from './dashboard/index';
import { StatusListItemComponent } from './dashboard/status-list-item/status-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StatusListComponent,
    StatusListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JQUERY_PROVIDER,
    DisclosurerequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
