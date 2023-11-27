// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  addToCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
  }

  removeFromCart(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(cartItem => cartItem.id !== item.id);
    this.cartItemsSubject.next(updatedItems);
  }

  increaseQuantity(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(cartItem => {
      if (cartItem === item) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    this.cartItemsSubject.next(updatedItems);
  }

  decreaseQuantity(item: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(cartItem => {
      if (cartItem === item && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    this.cartItemsSubject.next(updatedItems);
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }


}
