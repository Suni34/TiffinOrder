import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';

import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.breakfast.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.breakfast.id, quantity);
  }

}
