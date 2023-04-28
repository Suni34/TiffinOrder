import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RatingModule } from 'ng-starrating';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    VendorComponent,
    AddVendorComponent,
    VendorDetailsComponent,
    DeleteVendorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    CartComponent,
    SearchComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

















