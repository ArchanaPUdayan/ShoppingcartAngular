import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';


const myRoute:Routes=[
  {
    path:"",
    component:ProductentryComponent
  },
  {
    path:"view",
    component:ViewproductsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductentryComponent,
    ViewproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
