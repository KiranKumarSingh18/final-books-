import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent 
{
  paymentList:any;

  constructor(private router:Router,private paymentService:PaymentService) {}

  orders()
  {
    
    this.router.navigate(['myorders']);
  }

  ngOnInit(){
    
    this.paymentService.orders().subscribe((data) => {
      this.paymentList=data;
      console.log(data);
    })
  }

}
