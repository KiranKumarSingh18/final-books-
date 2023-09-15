import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { BooksService } from 'src/app/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popularbooks',
  templateUrl: './popularbooks.component.html',
  styleUrls: ['./popularbooks.component.css']
})
export class PopularbooksComponent {

  books:any[] =[];

  constructor(private adminService:AdminService,private showbookservice:BooksService,private router:Router ){}

  ngOnInit(): void
  {
      this.adminService.showPopularBooks().subscribe((data)=> this.books = data);
      console.log(this.books)
  }

  addTocart(title:string,id:number,price:number){
    this.showbookservice.addToCart(id,price).subscribe((response)=>{
      console.log(response);
      alert(title+ ' is added to cart');
    }
    ,
    (error)=>console.log(error));
  }

  public logOut(){
    this.adminService.logOut().subscribe((data)=>console.log(data));
    this.router.navigate(['login']);
  }

}
