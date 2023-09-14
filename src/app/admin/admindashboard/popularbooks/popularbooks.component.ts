import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-popularbooks',
  templateUrl: './popularbooks.component.html',
  styleUrls: ['./popularbooks.component.css']
})
export class PopularbooksComponent {

  books:any[] =[];

  constructor(private adminservice:AdminService,private showbookservice:BooksService){}

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

}
