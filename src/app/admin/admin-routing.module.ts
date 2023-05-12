import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUserComponent } from './all-user/all-user.component';



const routes: Routes = [

  { path:'', component:AdminComponent, children:[

    {path:'profileAdminNN', component:DashboardComponent},
   {path:'allUser',component:AllUserComponent},
    {path:'profileAdmin', component:GetProfileComponent},
   
  ]}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
