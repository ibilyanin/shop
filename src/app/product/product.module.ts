import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent], // второй компонент не нужно делать публичным
  imports: [CommonModule, AppMaterialModule]
})
export class ProductModule { }
