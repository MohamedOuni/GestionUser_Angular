import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { GetMyProfileComponent } from './get-my-profile/get-my-profile.component';
import { UpdateMyProfilComponent } from './update-my-profil/update-my-profil.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';





const routes: Routes = [
  { path:'', component:ClientComponent, children:[
    {path: 'signin', component:SigninComponent},
    {path: 'home' , component:HomeComponent},
    {path: 'profile', component:GetMyProfileComponent},
    {path: 'updateprofile', component:UpdateMyProfilComponent},
   {path: 'forgetpassword', component:ForgetPasswordComponent},
   {path: 'resetpassword', component:ResetPasswordComponent},



 ]}, 

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
