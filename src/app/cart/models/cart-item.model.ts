import { Guid } from 'guid-typescript';

export class CartItemModel {
    productId: Guid;
    productName: string;
    productPrice: number;
    quantity: number;

    constructor(productId: Guid, quantity: number, productName: string, productPrice: number) {
        this.productId = productId;
        this.quantity = quantity;
        this.productName = productName;
        this.productPrice = productPrice;
    }
}
