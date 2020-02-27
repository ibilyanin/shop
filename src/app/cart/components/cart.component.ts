import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/shared/models/product-model'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:ProductModel[]; 
  newproduct: ProductModel;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProductsFromBag();
    this.newproduct = {name:null, description:null, price:null};
  }

  public addProductToBag()
  {
      this.cartService.addProductToBag(this.newproduct);
  }

  public clearBag()
  {
    this.cartService.clearBag();
  }

}
