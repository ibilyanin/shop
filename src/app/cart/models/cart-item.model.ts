import { ProductModel } from '../../product/models/product.model';

export class CartItemModel {
    constructor(
        public product: ProductModel, 
        public quantity: number) {
        }
    }
