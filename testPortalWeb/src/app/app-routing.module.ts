import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
