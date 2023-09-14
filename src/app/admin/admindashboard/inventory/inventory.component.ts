import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventory:any[] = []

  constructor(private adminService:AdminService ){}

  ngOnInit(): void
    {
        this.adminService.showInventory().subscribe((data)=> {
          this.inventory = data;
         console.log(this.inventory)
        });
        
    }
}
