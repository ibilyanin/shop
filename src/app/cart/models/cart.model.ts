import { Guid } from 'guid-typescript';
import { CartItemModel } from './cart-item.model';

export class CartModel {
    constructor(
        public cartId: Guid = Guid.create(),
        public totalCount: number = 0,
        public totalAmount: number = 0,
        public dateCreate: Date = new Date(),
        public lastUpdate: Date = new Date(),
        public buyedItems: Array<CartItemModel> =  new Array<CartItemModel>()
    ) {
        // this.cartId = ;
        // this.totalCount = 0;
        // this.totalAmount = 0;
        // this.dateCreate = new Date();
        // this.lastUpdate = new Date();
        // this.buyedItems = new Array<CartItemModel>();
    }
}
