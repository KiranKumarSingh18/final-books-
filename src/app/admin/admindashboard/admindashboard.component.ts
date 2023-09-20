import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private adminService:AdminService,private router:Router){}

  addBook(authorId:string,publisherId:string,title:string,category:string,link:string,price:string){
    this.adminService.insertBook(authorId,publisherId,title,category,link,Number(price)).subscribe((response)=>console.log(response))
    alert("Book added successfully");
  }

  public logOut(){
    this.adminService.logOut().subscribe((data)=>console.log(data));
    this.router.navigate(['login']);
  }
}
