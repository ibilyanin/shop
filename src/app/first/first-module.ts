import { NgModule } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ProductComponent } from './components/product-component/product.component';
import { ProductListComponent } from './components/product-list-component/product-list.component';
import { ProductService } from './services/product-service'

@NgModule({
  imports: [
    FirstComponentComponent,ProductComponent,ProductListComponent
  ],
  exports: [
    FirstComponentComponent,ProductComponent,ProductListComponent
  ],
})
export class FirstModule { }