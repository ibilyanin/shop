import { NgModule } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ProductComponent } from './components/product-component/product.component';
import { ProductListComponent } from './components/product-list-component/product-list.component';
import { AppMaterialModule } from '../app.material.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    FirstComponentComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    // CommonModule, // нужен для директивы *ngFor
    AppMaterialModule
  ],
  exports: [
    FirstComponentComponent,
    // ProductComponent, ProductListComponent - эти компоненты используются только в компонентах
    // текущего модуля, а значит могут быть приватными
  ],
})
export class FirstModule { }
