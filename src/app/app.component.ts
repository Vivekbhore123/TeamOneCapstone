import { Component,OnInit } from '@angular/core';
import { LoginService } from './core/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent implements OnInit {
  title = 'ProjectA';
  // checkUserLoginStatus:boolean=false;
  checkUserLoginStatus:any={};

  constructor(private obj:LoginService)
  {
   
  }
  
  temp:any= {
    username: "",
    status: false
  }
 
  ngOnInit(): void {
  } 
 
  checkIfLogin()
  {
    if(localStorage.getItem("islogin")=="true")
    {
      this.temp.username = localStorage.getItem("userM");
      this.temp.status = true;
    } 
    return this.temp;
  }



 


}
