import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent {
  books:any[]=[];

  constructor(private showbookservice : BooksService){}

  ngOnInit(): void
    {
        this.showbookservice.getAllbookDetails('').subscribe((data)=> this.books = data);
        console.log(this.books)
    }

    showBooksByTitle(title:string){

      const url='/search/'+title;
      this.showbookservice.getAllbookDetails(url).subscribe((data)=> this.books = data);
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
