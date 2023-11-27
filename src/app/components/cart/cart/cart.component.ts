import { Component } from '@angular/core';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: any): void {
    this.cartService.increaseQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: any): void {
    this.cartService.decreaseQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  submitPaymentForm() {

  }
}
