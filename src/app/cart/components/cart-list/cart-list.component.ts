import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../models/cart.model';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
public cart: CartModel;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  onDeleteCartItem(value: CartItemModel) {
    this.cartService.removeProductFromCart(value.productId);
  }

  onChangeCount(value: CartItemModel) {
    this.cartService.changeItemCount(value.productId, value.quantity);
  }

  getTotal(): number {
    let sum = 0;
    for (const item of this.cart.buyedItems) {
      sum += item.quantity * item.productPrice;
    }
    return sum;
  }

}
