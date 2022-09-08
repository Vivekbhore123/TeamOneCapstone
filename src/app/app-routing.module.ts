import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './core/services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { CompaniesComponent } from './companies/companies.component';
import { InterviewExpComponent } from './interview-exp/interview-exp.component';
import { MockInterviewComponent } from './mock-interview/mock-interview.component';
 
const routes: Routes = [
  {path:"login",component:LoginComponent},
  // {path:"dashboard",component:DashboardComponent,canActivate:[LoginService]},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LoginComponent},

  {path:"companies",component:CompaniesComponent},
  {path:"interviewexp",component:InterviewExpComponent},
  {path:"mock",component:MockInterviewComponent},




  {path:"pagenotfound",component:PageNotFoundComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"**",component:LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
