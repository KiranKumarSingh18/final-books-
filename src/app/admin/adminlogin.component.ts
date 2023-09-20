import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminlogin.component.html',
  //   styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent {
  constructor(private appService: AdminService,
    private router: Router) { }

  onLogin(txt1: string, txt2: string) {
    if (txt1 != '' && txt2 != '') {
      this.appService.onLoginService(txt1, txt2).subscribe((response) => {
        if (response) {
          alert("Login Successfull")
          this.router.navigate(['admin-dashboard']);
        }
        else {
          alert("Invalid Email or Password")
        }
      },
        (error) => {
          console.log(error)
        })
    }
    else {
      alert("Enter valid credentials");
    }

  }

  goToReg() {
    this.router.navigate(['register']);
  }
}