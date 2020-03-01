import { Injectable } from '@angular/core';
import { FirstProductModel } from 'src/app/first/models/first-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProducts(): FirstProductModel[] {
    let result: FirstProductModel[]  = [
      {name: 'Product1', description: 'description 1', price: 10},
      {name: 'Product2', description: 'description 2', price: 20},
      {name: 'Product3', description: 'description 3', price: 30}
    ];
    return result;
  }
}
