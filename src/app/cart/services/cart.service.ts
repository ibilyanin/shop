import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { CartItemModel } from '../models/cart-item.model';
import { Guid } from 'guid-typescript';
import { ProductService } from '../../product/services/product.service';
import { ProductModel } from 'src/app/product/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel;

  constructor(private productService: ProductService) {
    this.cart = new CartModel();
    this.cart.buyedItems = [];
    this.cart.dateCreate = new Date();
    this.cart.lastUpdate = new Date();
    this.cart.ownerName = 'Anonymous';
    this.cart.cartId = Guid.create();
  }

  addProductToCart(product: ProductModel) {
    const searchItem = this.cart.buyedItems.find(x => x.productId === product.id);
    if (searchItem == null) {
      const newItem = new CartItemModel(product.id, 1, product.name, product.price);
      this.cart.buyedItems.push(newItem);
    }
  }

  changeItemCount(productId: Guid, count: number) {
    const searchItem = this.cart.buyedItems.find(x => x.productId === productId);
    if (searchItem != null) {
      searchItem.quantity = count;
    }
  }

  removeProductFromCart(productId: Guid) {
    const itemIndex = this.cart.buyedItems.findIndex(x => x.productId === productId);
    if (itemIndex == null) {
      return;
    }
    this.cart.buyedItems.splice(itemIndex, 1);
    this.productService.makeAvailable(productId);
  }
}
