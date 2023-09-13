import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-admin-registration',
    templateUrl: './adminregistration.component.html',
    //   styleUrls: ['./registration.component.css']
})
export class AdminRegistrationComponent {
    constructor(private appService: AdminService,
        private router: Router) { }


    selectedOption: string = '';




    onsubmit(txt1: string, txt2: string, txt3: string, txt4: string) {

        // console.log(txt1, txt2, txt3, Number(num), this.selectedOption, txt6);

        if (txt4 == 'BookAdmin' || txt4 == 'ProlificsAdmin') {
            this.appService.onsubmitService(txt1, txt2, txt3).subscribe((response) => {

                this.router.navigate(['admin-dashboard']);
                alert("Admin Successfully Registered")
            },
                (error) => {
                    console.log(error)
                    alert("Admin Exist")
                })
        }
        else {
            alert("You cannot register as Admin");
        }
    }
}
