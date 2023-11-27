// home-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  items: any[] = [];
  p: number = 1;
  loader: boolean = true;

  constructor(private productService: ProductService, private cartService: CartService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {

      this.loader = false;

      this.items = data;
      this.items.forEach(element => {
        element.quantity = 0;
        element.isSelected = false;
        console.log(this.items);

      });

    });
  }

  pageChanged(event: any): void {
    this.p = event;
  }


  addToCart(item: any): void {
    let items = this.cartService.getCartItems();
    const existingItem = items.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartService.addToCart(item);
    }
    this.toastr.success('Message Success!', 'Title Success!');
    this.items.find(items => items.id == item.id).isSelected = true;
    console.log(this.items);

  }

  RemoveToCart(item: any) {
    this.items.find(items => items.id == item.id).isSelected = false;
    this.cartService.removeFromCart(item);
    // this.cartService.getCartItems();
  }

}
