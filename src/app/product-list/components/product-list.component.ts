import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service'
import { ProductModel } from 'src/app/shared/models/product-model'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products:ProductModel[];
  constructor(private productService:ProductService) { }

  getProducts(): void {
    this.Products = this.productService.getProducts();
  }

  ngOnInit(): void {
      this.getProducts();
  }

}
