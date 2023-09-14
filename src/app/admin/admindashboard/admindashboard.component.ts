import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private adminService:AdminService){}

  addBook(authorId:string,publisherId:string,title:string,category:string,link:string,price:string){
    this.adminService.insertBook(authorId,publisherId,title,category,link,Number(price)).subscribe((response)=>console.log(response))
    alert("Book added successfully");
  }
}
