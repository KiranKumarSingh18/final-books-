import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminlogin.component.html',
//   styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent {
  constructor(private appService:AdminService,
    private router: Router){}

  onLogin(txt1: string, txt2: string){
    
    this.appService.onLoginService(txt1, txt2).subscribe((response)=>{
      if(response){
        alert("Login Successfull")
        this.router.navigate(['admin-dashboard']);
      }
      else{
        alert("Invalid Enail or Password")
      }
    },
    (error)=>{
      console.log(error)
    })
  }

  goToReg(){
    this.router.navigate(['register']);
  }
}