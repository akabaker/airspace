import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JQUERY_PROVIDER } from './common/jQuery.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    JQUERY_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
