import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch: "full"},
  // {path:"**", redirectTo:"home"},
  {path: "login", component:LoginComponent},
  {path: "home", component:HomeComponent},
  {path: "register", component:RegisterComponent},
  {path: "forgot", component:ForgetPasswordComponent},
  {path: "view", component:ViewProfileComponent},
  {path: "edit", component:ViewEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
