import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { LoginService } from '../../core/services/login.service';
import { PeriodicElement } from "../../core/models/users.model"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MatError } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {


  username: string = "";
  password: string = "";




  constructor(private obj: LoginService, private router: Router, private appOj: AppComponent, private navbar: NavbarComponent) { }

  ngOnInit(): void {

  }


  savePerson(form: NgForm) {

    this.obj.setCredentials(this.username, this.password);
    this.validateUser()


  }

  temp:any= {
    username: "",
    status: false
  }

  validateUser() {
    // let temp = {}
    this.obj.dosomething().subscribe((item) => {
      console.log(item);
       this.temp = item;
       if (this.temp.username != "" && this.temp.status == true) {
        this.router.navigate(['/dashboard'])
        setTimeout(()=>{
          window.location.reload();
        },1000)
      }
      else {
        alert("wrong credentials")
        localStorage.clear();
        this.router.navigate(['/login'])
      }
    });

    // console.log(test);
   
  }

}

