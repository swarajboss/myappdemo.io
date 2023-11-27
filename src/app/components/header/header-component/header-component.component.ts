import { Component, Input } from '@angular/core';
import { CartService } from '../../../cart.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  @Input() showCart: boolean = false;
  totalCount: any;
  @Input() totalitem = Observable<any[]>;
  constructor(private cartService: CartService) { }

  getCartItems(): any[] {
    let cartItems: any[] = [];
    this.cartService.cartItems$.subscribe((items) => {
      cartItems = items;
      console.log(items);
    });
    return cartItems;
  }

  ngOnchanges() {
    this.totalCount = this.cartService.cartItems$.subscribe((data: any) => {

    });
  }
}
