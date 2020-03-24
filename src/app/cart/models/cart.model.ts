import { Guid } from 'guid-typescript';
import { CartItemModel } from './cart-item.model';

export class CartModel {
    constructor(
        public cartId?: Guid,
        public totalCount?: number,
        public totalAmount?: number,
        public dateCreate?: Date,
        public lastUpdate?: Date,
        public buyedItems?: Array<CartItemModel>
    ) {
        this.cartId = Guid.create();
        this.totalCount = 0;
        this.totalAmount = 0;
        this.dateCreate = new Date();
        this.lastUpdate = new Date();
        this.buyedItems = new Array<CartItemModel>();
    }
}
