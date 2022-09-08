import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[LoginService]
})
export class DashboardComponent implements OnInit {

  checkUserLoginStatus:any={};

  constructor(private route:Router,private obj:LoginService) { 
  

  }
  temp:any= {
    username: "",
    status: false
  }
 
 
  ngOnInit(): void {
   
   
  }

  
  checkIfLogin()
  {
   
    return  this.checkUserLoginStatus;
  }
 

}
