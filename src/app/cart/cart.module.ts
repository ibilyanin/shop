import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AppMaterialModule } from '../app.material.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  exports: [CartListComponent, CartItemComponent],
  imports: [CommonModule, AppMaterialModule, ShareModule]
})
export class CartModule { }
