import { Guid } from 'guid-typescript';
import { Category } from './category.enum';

export class ProductModel {
    id: Guid;
    name: string;
    description: string;
    price: number;
    category: Category;
    available: boolean;

    constructor(id: Guid, name: string, description: string, price: number, category: Category, available: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.available = available;
    }
}
