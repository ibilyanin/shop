import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() currentCartItem: CartItemModel;

  @Output() delete = new EventEmitter<CartItemModel>();
  @Output() increase = new EventEmitter<CartItemModel>();
  @Output() decrease = new EventEmitter<CartItemModel>();

  ngOnInit(): void {
  }

  deleteHandler() {
    this.delete.emit(this.currentCartItem);
  }

  increaseHandler() {
    this.increase.emit(this.currentCartItem);
  }

  decreaseHandler() {
    if (this.currentCartItem.quantity <= 1) {
      this.delete.emit(this.currentCartItem);
    }
    this.decrease.emit(this.currentCartItem);
  }

}
