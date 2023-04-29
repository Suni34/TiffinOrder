import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breakfast } from '../breakfast';
import { BreakfastService } from '../breakfast.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  breakfast!:Breakfast;
  constructor(activatedRoute: ActivatedRoute, private api:BreakfastService , private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.breakfast =api.getBreakfastById(params.id)
    })
  }


  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.breakfast);
    this.router.navigateByUrl('/cart')
  }

}
