import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Aggiungi questa importazione

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdHomeComponent } from './prod-home/prod-home.component';
import { TabSiteComponent } from './tab-site/tab-site.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ProdHomeComponent,
    TabSiteComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '#', component: ProdHomeComponent }, // Cambia il componente in base alle tue esigenze
      { path: 'test/:id', component: ProductDetailsComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
