import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from 'app/Atithi_Login/login.component';
import {SignupComponent} from 'app/Atithi_Signup/signup.component';
import {DashboardComponent} from 'app/dashboard/dashboard.component';



export const signupRoutes = [
  { path: '',component: LoginComponent},
  {  path: 'signup', component: SignupComponent},
  {  path: 'dashboard', component: DashboardComponent}
 ];


