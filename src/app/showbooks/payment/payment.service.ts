import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient ) { }

  public orders(): Observable<any> 
  {
    const options = {
      withCredentials: true
    }
    return this.httpClient.get('http://localhost:8087/payment', options);
  }
  

}
