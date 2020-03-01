import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from 'src/app/first/enums/category-enum.enum';
import { ProductComponent } from 'src/app/first/components/product-component/product.component';
import { ProductListComponent } from 'src/app/first/components/product-list-component/product-list.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  categories: string[];
  isAvailable: boolean;
  constructor() { }

  ngOnInit(): void {
    this.name='Product name';
    this.description = 'Produect description';
    this.price = 10;
    this.category = CategoryEnum.ThirdCategory;
    this.isAvailable = true;
  }

}
