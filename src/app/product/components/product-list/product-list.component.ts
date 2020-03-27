import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: ProductModel[];

  constructor(private productService: ProductService, private cartService: CartService, private cdr: ChangeDetectorRef) {  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public getProducts() {
    return this.products;
  }

  public onAdd(product: ProductModel) {
    product.available = false;
    this.cartService.addProduct(product, 1);
    this.cdr.detectChanges(); // разве это надо тут? 
  }


}
