import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AppService 
{
  constructor(private httpClient:HttpClient) { }
  public onsubmitService(txt1: string, txt2: string, txt3: string, txt4: number):Observable<any>{

    const url='http://localhost:8087/admin/signup';

    const data = {

      "adminName": txt1,
      "email": txt2,
      "password": txt3,
      "mobile": txt4,

    };
    return this.httpClient.post(url,data);

    }

    public onLoginService(txt1:string,txt2:string):Observable<any>

    {
       const url='http://localhost:8087/admin/login';
       const data = 
       {
        "email": txt1,
        "password": txt2,

    };
    return this.httpClient.post(url,data);
}
}
