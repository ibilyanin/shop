import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { AppMaterialModule } from '../app.material.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent],
  imports: [AppMaterialModule, ShareModule]
})
export class ProductModule { }
