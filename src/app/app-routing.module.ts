import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { FoodPageComponent } from './food-page/food-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-vendor', component: AddVendorComponent },
  { path: 'vendor-details/:vendorId', component: VendorDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:search', component: CustomerComponent },
  { path: 'breakfast/:id', component: FoodPageComponent },
  { path: 'order', component: FoodPageComponent }


  // {path: '', redirectTo: 'vendors', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
