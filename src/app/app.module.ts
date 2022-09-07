import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarComponent } from './navbar/navbar.component';




import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './core/services/Data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { MockInterviewComponent } from './mock-interview/mock-interview.component';
import { InterviewExpComponent } from './interview-exp/interview-exp.component';



@NgModule({
  declarations: [
    AppComponent,

    PageNotFoundComponent,

    MockInterviewComponent,
    InterviewExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,

    AuthModule,

    NgbModule,

    NavbarModule,

    BrowserAnimationsModule,

    FormsModule,
    
    // MatInputModule,
    MatFormFieldModule,
    // EmployeeModule,
    // ProductModule,
    MatTableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
    
  ],

  
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
