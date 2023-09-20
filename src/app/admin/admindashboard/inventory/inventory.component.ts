import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventory:any[] = []

  constructor(private adminService:AdminService,private router:Router ){}

  ngOnInit(): void
    {
        this.adminService.showInventory().subscribe((data)=> {
          this.inventory = data;
         console.log(this.inventory)
        });
        
    }
    public logOut(){
      this.adminService.logOut().subscribe((data)=>console.log(data));
      this.router.navigate(['login']);
    }
}
