import { NgModule } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ProductComponent } from './components/product-component/product.component';
import { ProductListComponent } from './components/product-list-component/product-list.component';
import { AppMaterialModule } from '../app.material.module';
@NgModule({
  declarations: [
    FirstComponentComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    AppMaterialModule
  ],
  exports: [
    FirstComponentComponent, ProductComponent, ProductListComponent
  ],
})
export class FirstModule { }
