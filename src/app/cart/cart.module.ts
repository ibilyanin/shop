import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AppMaterialModule } from '../app.material.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  exports: [CartListComponent],
  imports: [AppMaterialModule, ShareModule]
})
export class CartModule { }
