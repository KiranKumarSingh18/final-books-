import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  constructor(private appService:AuthService,
    private router: Router){
     
    }

  onLogin(txt1: string, txt2: string){
    if(txt1 != '' && txt2 != '' ){
      this.appService.onLoginService(txt1, txt2).subscribe((response)=>{
        if(response){
          alert("Login Successfull")
          this.router.navigate(['books']);
        }
        else{
          alert("Invalid Email or Password")
        }
      },
      (error)=>{
        console.log(error)
      })
    }
    else{
      alert("Please enter valid Credentials")
    }
    
  }

  


  goToReg(){
    this.router.navigate(['register']);
  }
}