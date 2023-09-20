import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-customerpopular',
  templateUrl: './customerpopular.component.html',
  styleUrls: ['./customerpopular.component.css']
})
export class CustomerpopularComponent {
  books:any[] =[];

  constructor(private adminservice:AdminService,private showbookservice:BooksService,private router :Router){}

  ngOnInit(): void
  {
      this.adminservice.showPopularBooks().subscribe((data)=> this.books = data);
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
    this.showbookservice.logOut().subscribe((data)=>console.log(data));
    this.router.navigate(['login']);
  }
}
