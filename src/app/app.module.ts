import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthService } from './auth.service';
import { BooksService } from './books.service';
import { CommonModule } from '@angular/common';
import { ShowbooksModule } from './showbooks/showbooks.module';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // AdminloginComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,FormsModule,HttpClientModule,RouterModule,
    // CommonModule,
    // AdminModule,
    // CartModule,
    // LoginModule,
    // RegistrationModule

    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    ShowbooksModule,
    CartModule,
    AdminModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
