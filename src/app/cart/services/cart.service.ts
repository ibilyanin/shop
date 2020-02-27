import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product-model'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private bag:ProductModel[];

  constructor() { 
    this.bag = [];
  }
  
  public addProductToBag(product:ProductModel)
  {
    var newproduct = {
        name:product.name,
        description:product.description, 
        price:product.price
      }

    this.bag.push(newproduct);
    console.log('new item name: ' + product.name);
    console.log('bag items count: '+this.bag.length);
  }

  public clearBag()
  {
    this.bag.length = 0;
  }

  public getProductsFromBag():ProductModel[]
  {
    return this.bag;
  }
  
}
