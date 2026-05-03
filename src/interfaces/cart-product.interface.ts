import type { IProduct } from "./product.interface";

export interface ICartProduct extends IProduct {
    quantity: number;
}