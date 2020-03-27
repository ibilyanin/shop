import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Guid } from 'guid-typescript';
import { Category } from '../models/category.enum';

const products: ProductModel[]  =  [
  new ProductModel(Guid.create(), 'Product number 1', 'Very useful product. Is needed for everything.', 1.50,
  Category.SecondCategory, true),
  new ProductModel(Guid.create(), 'Product number 2', 'The same as product 1 but is cheapper.', 1.49,
  Category.SecondCategory, true),
  new ProductModel(Guid.create(), 'Product number 3', 'The best of the best.', 100,
  Category.SecondCategory, true),
  new ProductModel(Guid.create(), 'Product number 4',
  'Very unique product. With this product you feeling yourself very special.',
  1000, Category.FirstCategory, true)];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): ProductModel[] {
    return products;
  }

  getProduct(productId: Guid): ProductModel {
    return products.find(x => x.id === productId);
  }

  makeAvailable(productId: Guid) {
    products.find(x => x.id === productId).available = true; // так опасно, find может вернуть undefined
  }
}
