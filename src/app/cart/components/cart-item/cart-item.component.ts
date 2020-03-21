import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() currentCartItem: CartItemModel;

  @Output() deleteCartItem = new EventEmitter<CartItemModel>();
  @Output() changeCount = new EventEmitter<CartItemModel>();


  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
  }

  deleteButtonClickHandler() {
    console.log('Cart item delete: ' + this.currentCartItem.productId);
    this.deleteCartItem.emit(this.currentCartItem);
  }

  incrementCartItemCountHandler() {
    console.log('Cart item increment: ' + this.currentCartItem.quantity);
    this.currentCartItem.quantity++;
    this.changeCount.emit(this.currentCartItem);
  }

  decrementCartItemCountHandler() {
    this.currentCartItem.quantity--;
    if (this.currentCartItem.quantity < 1) {
      console.log('Cart item delete: ' + this.currentCartItem.productId);
      this.deleteCartItem.emit(this.currentCartItem);
    }
    console.log('Cart item decrement: ' + this.currentCartItem.quantity);
    this.changeCount.emit(this.currentCartItem);
  }

}
