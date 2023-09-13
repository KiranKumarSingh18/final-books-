import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ShowbooksComponent } from "./showbooks.component";
import { BooksService } from "../books.service";
import { MyordersComponent } from './myorders/myorders.component';


@NgModule({

    declarations:[ShowbooksComponent, MyordersComponent,MyordersComponent],
    imports:[ CommonModule, RouterModule,FormsModule],
    exports:[ShowbooksComponent,MyordersComponent],
    providers:[BooksService]

})

export class ShowbooksModule
{


}