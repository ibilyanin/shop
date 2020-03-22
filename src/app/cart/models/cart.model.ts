import { Guid } from 'guid-typescript';
import { CartItemModel } from './cart-item.model';

export class CartModel {
    cartId: Guid;
    ownerName: string;
    dateCreate: Date;
    lastUpdate: Date;
    buyedItems: CartItemModel[];

}
