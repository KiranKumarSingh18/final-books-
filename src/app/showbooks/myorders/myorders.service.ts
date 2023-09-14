import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyordersService {

  constructor(private httpClient: HttpClient) { }

  public showOrders(): Observable<any> {
    const options = {
      withCredentials: true
    }
    return this.httpClient.get('http://localhost:8087/orders/myorders', options);
  }

  public showOrderItems(): Observable<any> {
    const options = {
      withCredentials: true
    }
    return this.httpClient.get('http://localhost:8087/orderitems/myorderitems', options);
  }

  public logOut():Observable<any>{
    const url='http://localhost:8087/customer/logout';
    const options = {

      withCredentials: true

    };
    return this.httpClient.post(url,options);
  }
}
