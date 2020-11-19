import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HeadComponent } from './components/head/head.component';
import { ServiceComponent } from './components/service/service.component';
import { Contact1Component } from './contact/contact1/contact1.component';
import { Contact2Component } from './contact/contact2/contact2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
// import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"", component: HeaderComponent},
  {path:"about", component: AboutComponent},
  {path:"header", component: HeaderComponent},
  {path:"service", component: ServiceComponent},
  // {path:"login", component: LoginComponent},
  {path:"contact2", component: Contact2Component},
  
  {path:"**", component: ErrorComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
