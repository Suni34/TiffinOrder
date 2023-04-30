import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RatingModule } from 'ng-starrating';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    VendorComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    CartComponent,
    SearchComponent,
    FoodPageComponent,
    TitleComponent,
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

















