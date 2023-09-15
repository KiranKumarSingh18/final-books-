import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from '@angular/forms';
import { CartComponent } from "./cart.component";
import { CartService } from "./cart.service";


@NgModule({

    declarations:[CartComponent],
    imports:[ CommonModule, RouterModule,FormsModule],
    exports:[CartComponent],
    providers:[CartService]

})

export class CartModule{

}