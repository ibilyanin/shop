import { Guid } from 'guid-typescript';
import { Category } from './category.enum';

export class ProductModel {
    constructor(
        public id: Guid,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public available: boolean) { }
}
