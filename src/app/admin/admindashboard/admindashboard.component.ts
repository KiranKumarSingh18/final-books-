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
    if(authorId!='' && publisherId!='' && title!='' && category!='' && link!='' && price!='')
    {
      this.adminService.insertBook(authorId,publisherId,title,category,link,Number(price)).subscribe((response)=>{
        console.log(response)
        if(response=='OK'){
          alert("Book added successfully");
        }
        else{
          alert("Book exist..");
        }
      });
     
    }
    else
    {
      alert("Please Enter Valid Details");
    }
    
  }

  updateBook(bookId:string,quantity:string){
    if(bookId!='' && quantity!='')
    {
      this.adminService.updateBook(Number(bookId),Number(quantity)).subscribe((response)=>{
        if(response=='OK'){
          alert("Book Updated successfully");
          console.log("asdad"+response);
          // return;
        }
        else{
          console.log("Not Modifieed");
          alert("Book is not present");
        }
          
        
      });
      
    }
    else
    {
      alert("Please Enter Details Correctly");
    }
    
  }

  public logOut(){
    this.adminService.logOut().subscribe((data)=>console.log(data));
    this.router.navigate(['login']);
  }
}
