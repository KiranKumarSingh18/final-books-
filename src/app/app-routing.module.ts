import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ShowbooksComponent } from './showbooks/showbooks.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin/adminlogin.component';
import { AdminRegistrationComponent } from './admin/adminregistration.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { MyordersComponent } from './showbooks/myorders/myorders.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"books",component:ShowbooksComponent},
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"mycart",component:CartComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"adminregistration",component:AdminRegistrationComponent},
  {path:"admin-dashboard",component:AdmindashboardComponent},
  {path:"myorders",component:MyordersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 {
     
 }
