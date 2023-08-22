import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdHomeComponent } from './prod-home/prod-home.component';
import { TabSiteComponent } from './tab-site/tab-site.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdHomeComponent,
    TabSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
