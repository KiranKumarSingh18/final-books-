import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private appService:AuthService,
    private router: Router){}


    selectedOption: string = '';

    
  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }

  onsubmit(txt1: string, txt2: string, txt3: string, txt4: string,txt6: string){
    const num = BigInt(txt4);
    // console.log(txt1, txt2, txt3, Number(num), this.selectedOption, txt6);
    this.appService.onsubmitService(txt1, txt2, txt3, Number(num), this.selectedOption, txt6).subscribe((response)=>{
      
        this.router.navigate(['books']);
      alert("Successfully Registered")
    },
    (error)=>{
      console.log(error)
      alert("User Exist")
    })
  }
}
