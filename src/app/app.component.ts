import { Component } from '@angular/core';
import { ProductComponentComponent } from './product-component/product-component.component';
import {ProductListComponent} from './product-list/product-list.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}
