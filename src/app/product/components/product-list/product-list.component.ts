import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(public productService: ProductService, private cartService: CartService) {  }

  public onAdd(product: ProductModel) {
    this.productService.setAvailable(product, false);
    this.cartService.addProduct(product, 1);
  }
}
