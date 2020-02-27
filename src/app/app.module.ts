import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/components/product-list.component';
import { CartComponent } from './cart/components/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
