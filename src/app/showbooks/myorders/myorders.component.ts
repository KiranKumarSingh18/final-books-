import { Component, OnInit } from '@angular/core';
import { MyordersService } from './myorders.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders: any[] = [];
  orderItems: any[] = [];
  

  constructor(private orderService: MyordersService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.orderService.showOrders().subscribe((data) => {
      this.orders = data;
      console.log(this.orders);

    });

    this.orderService.showOrderItems().subscribe((data) => {
      this.orderItems = data;
      console.log(this.orderItems);

    });
  }
  showOrderDetails: boolean[] = new Array(this.orders.length).fill(false);


  viewItems(orderID: number): void {
    const index = this.orders.findIndex((item) => item.orderID === orderID);
    if (index !== -1) {
      this.showOrderDetails[index] = !this.showOrderDetails[index];
    }
  }

  public logOut(){
    this.orderService.logOut().subscribe((data)=>console.log(data));
    this.router.navigate(['login']);
  }
}

