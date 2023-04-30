import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breakfast } from '../models/breakfast';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartitem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(breakfast: Breakfast): void {
    let cartItem = this.cart.items
      .find(item => item.breakfast.id === breakfast.id)
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(breakfast));
    this.setCartToLocalStorage();

  }

  removeFromCart(breakfastId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.breakfast.id != breakfastId);
    this.setCartToLocalStorage();

  }

  changeQuantity(breakfastId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.breakfast.id === breakfastId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.breakfast.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}