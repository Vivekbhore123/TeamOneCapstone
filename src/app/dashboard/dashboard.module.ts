import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AuthModule } from '../auth/auth.module';


 
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  
  exports:[DashboardComponent]
})
export class DashboardModule { }
