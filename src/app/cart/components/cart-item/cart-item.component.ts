import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() currentCartItem: CartItemModel;
  // currentCartItem$ = new BehaviorSubject(this.currentCartItem); // не понял, для чего он тут

  @Output() delete = new EventEmitter<CartItemModel>();
  @Output() increase = new EventEmitter<CartItemModel>();
  @Output() decrease = new EventEmitter<CartItemModel>();


 // constructor(private cartService: CartService) {  }

  ngOnInit(): void {
  }

  deleteHandler() {
    this.delete.emit(this.currentCartItem);
  }

  increaseHandler() {
    this.increase.emit(this.currentCartItem);
    // this.currentCartItem$.next(this.currentCartItem);
  }

  decreaseHandler() {
    if (this.currentCartItem.quantity <= 1) {
      this.delete.emit(this.currentCartItem);
    }
    this.decrease.emit(this.currentCartItem);
    // this.currentCartItem$.next(this.currentCartItem);
  }

}
