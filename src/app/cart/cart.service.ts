import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) { }

  public showCart() : Observable<any>
  {
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/cart/mybooks',options);
  }

  public deleteItem(id:number): Observable<any>
  {
    return this.httpClient.delete('http://localhost:8087/cart/'+Number(id));
  }


  public applyCoupon(coupon:string){
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/coupon/couponcode/'+coupon,options);
  }

  public orderNow(couponCode:string,amount:number){
    console.log(couponCode,amount);
    const options={
      withCredentials:true
    }
      const url = 'http://localhost:8087/payment/makepayment/'+couponCode+'/'+amount;
      console.log(url);
      return this.httpClient.get('http://localhost:8087/payment/makepayment/'+couponCode+'/'+amount,options);
  }
  public logOut():Observable<any>{
    const url='http://localhost:8087/customer/logout';
    const options = {

      withCredentials: true

    };
    return this.httpClient.get(url,options);
  }

}
