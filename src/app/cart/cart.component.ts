import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:any[]=[];
  coupon:any;
  constructor(private cartService : CartService,private router: Router){}

  total:number=0;
  discount : number =0;
  totalAmount:number =0;
  ngOnInit(): void
    {
        this.cartService.showCart().subscribe((data)=> {
          this.cart = data;
         console.log(this.cart)
        for (const book of this.cart) {
          this.total = this.total + book.price * book.quantity;
        }
        this.totalAmount=this.total - this.discount;
        console.log(this.total);});
        
    }

    removeFromCart(id:number){
      console.log("number"+id)
      this.cartService.deleteItem(id).subscribe((data)=>console.log(data));
      window.location.reload();
      
    }

    decreaseQuantity(cartId:number,bookId:Number)
    {
       
      this.cartService.decreaseQuantity(cartId,bookId).subscribe((data)=>{
        if(data == 'OK'){
        console.log(data);
        window.location.reload();
        }
        else{
          alert("Book is removed from cart");
          window.location.reload();
        }
      });
    }

    increaseQuantity(cartId:number,bookId:Number)
    {
       this.cartService.increaseQuantity(cartId,bookId).subscribe((data)=>{
        if(data == 'OK'){
        console.log(data);
        window.location.reload();
        }
        else{
          alert("Stock not available");
        }
      });
    }

    applyCoupon(coupon:string){
      // console.log("number"+id)
      if(coupon == null){
        coupon = "dummy";
      }
      this.cartService.applyCoupon(coupon).subscribe((data)=>{
        console.log(data);
        this.coupon=data;
        this.discount = Number(this.coupon.discountAmount);
        this.totalAmount=this.total - this.discount;
      });
    }
    
    orderNow(){

      if(this.coupon == null){
        this.coupon="dummy";
      }
      this.cartService.orderNow(this.coupon.couponCode,this.totalAmount).subscribe((data)=>console.log(data));
      alert("payment successful");
      this.router.navigate(['payment']);
      //this.router.navigate(['myorders']);
    }

    public logOut(){
      this.cartService.logOut().subscribe((data)=>console.log(data));
      this.router.navigate(['login']);
    }
}
