import { Injectable } from '@angular/core';
import { ProductService } from '../../product/services/product.service';
import { CartModel } from '../models/cart.model';
import { CartItemModel } from '../models/cart-item.model';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel;

  constructor(private productService: ProductService) {
    this.cart = new CartModel();
  }

  private addNewProduct(product): CartItemModel {
    const item = new CartItemModel(product, 0);
    this.cart.buyedItems.push(item);
    return item;
  }

  private getCartItemByProduct(product: ProductModel): CartItemModel {
    return this.cart.buyedItems.find(x => x.product.id === product.id);
  }

  public updateCartData() {
    this.cart.lastUpdate = new Date();
    let totalCount = 0;
    let totalAmount = 0;
    this.cart.buyedItems.forEach(x => {
      totalCount += x.quantity; totalAmount += x.quantity * x.product.price; });
    this.cart.totalAmount = totalAmount;
    this.cart.totalCount = totalCount;
  }

  public addProduct(product: ProductModel, count: number) {
    let currentItem = this.getCartItemByProduct(product);
    if (currentItem == null) {
      currentItem = this.addNewProduct(product);
    }
    currentItem.quantity += count;
    this.updateCartData();
  }

  public removeProduct(product: ProductModel) {
    const currentItemIndex = this.cart.buyedItems.findIndex(x => x.product.id === product.id);
    if (currentItemIndex == null) {
      return;
    }
    this.cart.buyedItems.splice(currentItemIndex, 1);
    this.updateCartData();
    product.available = true;
  }

  public increaseQuantity(product: ProductModel, count: number) {
    this.getCartItemByProduct(product).quantity += count;
    this.updateCartData();
  }

  public decreaseQuantity(product: ProductModel, count: number) {
    const currentItem = this.getCartItemByProduct(product);
    currentItem.quantity = Math.max(0, currentItem.quantity - count);
    this.updateCartData();
  }

  public removeAllProducts() {
    this.cart.buyedItems.splice(0, this.cart.buyedItems.length);
    this.updateCartData();
  }

  public changeItemCount(cartItem: CartItemModel, count: number) {
    const searchItem = this.cart.buyedItems.find(x => x.product.id === cartItem.product.id);
    if (searchItem != null) {
      searchItem.quantity = count;
    }
  }
}
