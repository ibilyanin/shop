import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/first/services/product-service';
import { FirstProductModel } from 'src/app/first/models/first-product-model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products: FirstProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.getProducts();
  }

  public getProducts(): void {
    this.Products = this.productService.getProducts();
  }

}
