import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../core/services/login.service';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[LoginService]
})
export class NavbarComponent implements OnInit {

  @Input()     
  checkUserLoginStatus:any={};

  constructor(private obj:LoginService,private router:Router)
  {
   
  }
  
  username:string | null = "";

  ngOnInit(): void {

   
} 

  performLogOut()
  {
    
    localStorage.clear();
    this.checkUserLoginStatus.status=false;
   
    setTimeout(() => {
      window.location.reload();

    }, 1000);
    this.router.navigate(['/login'])

  }



}

