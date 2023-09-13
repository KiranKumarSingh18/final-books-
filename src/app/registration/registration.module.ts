import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from "./registration.component";

@NgModule({

    declarations:[RegistrationComponent],
    imports:[ CommonModule, RouterModule,FormsModule],
    exports:[RegistrationComponent],
    providers:[]

})

export class RegistrationModule
{

}