import { Component, OnInit} from '@angular/core';
import { CartModel } from '../../models/cart.model';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent implements OnInit {
  public cart: CartModel;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  onDeleteCartItem(value: CartItemModel) {
    this.cartService.removeProduct(value.product);
  }

  onIncreaseCartItemCount(value: CartItemModel) {
    this.cartService.increaseQuantity(value.product, 1);
  }

  onDecreaseCartItemCount(value: CartItemModel) {
    this.cartService.decreaseQuantity(value.product, 1);
  }
}
