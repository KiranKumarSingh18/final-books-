import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private httpClient:HttpClient){}

  
  public onsubmitService(txt1: string, txt2: string, txt3: string, txt4: number, txt5: string, txt6: string):Observable<any>{
    const url='http://localhost:8087/customer/signup';
    const data = {
      "customerName": txt1,
      "email": txt2,
      "password": txt3,
      "mobileNumber": txt4,
      "gender": txt5,
      "address": txt6
    };

    const options = {

      withCredentials: true

    };

    return this.httpClient.post(url,data,options);
  }


  public onLoginService(txt1: string, txt2: string):Observable<any> {
    const url='http://localhost:8087/customer/login';
    const data = {
      "email": txt1,
      "password": txt2,
      
    };

    const options = {

      withCredentials: true

    };

    return this.httpClient.post(url,data,options);
  }

  


}
