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
     
   

    this.obj.dosomething().subscribe((item) => {
    console.log(item);
    console.log(this.checkUserLoginStatus.username);
     this.temp = item;
     if (this.temp.username != "" && this.temp.status == true) {
      this.checkUserLoginStatus = item; 
    }
  });

  } 
 
  checkIfLogin()
  {
   
    return  this.checkUserLoginStatus;
  }



 


}
