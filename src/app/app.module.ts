import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JQUERY_PROVIDER } from './common/jQuery.service';
import { NavComponent } from './nav/nav.component';
import { StatusListComponent } from './status-list/status-list.component';

import { DisclosurerequestsService } from './disclosurerequests.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    StatusListComponent,
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
