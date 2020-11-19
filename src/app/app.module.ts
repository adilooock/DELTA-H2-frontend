import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { Contact1Component } from './contact/contact1/contact1.component';
import { Contact2Component } from './contact/contact2/contact2.component';
import { AboutComponent } from './components/about/about.component';
import { HeadComponent } from './components/head/head.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { PhotoComponent } from './components/photo/photo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './contact/login/login.component';
import { ProduitComponent } from './contact/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServiceComponent,
    OurClientComponent,
    Contact1Component,
    Contact2Component,
    AboutComponent,
    HeadComponent,
    OurclientsComponent,
    PhotoComponent,
    FooterComponent,
    NavComponent,
    ErrorComponent,
    LoginComponent,
    ProduitComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
