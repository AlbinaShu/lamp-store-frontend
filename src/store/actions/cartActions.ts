import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART,
    LOAD_CART_FROM_STORAGE,
} from './cartActionTypes';
import type { ICartProduct } from '../../interfaces/cart-product.interface';
import type { IProduct } from '../../interfaces/product.interface';

export interface IAddToCartAction {
    type: typeof ADD_TO_CART;
    payload: ICartProduct;
}

export interface IRemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: string;
}

export interface IIncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY;
    payload: string;
}

export interface IDecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY;
    payload: string;
}

export interface IClearCartAction {
    type: typeof CLEAR_CART;
}

export interface ILoadCartFromStorageAction {
    type: typeof LOAD_CART_FROM_STORAGE;
    payload: ICartProduct[];
}

export type CartActionTypes =
    | IAddToCartAction
    | IRemoveFromCartAction
    | IIncreaseQuantityAction
    | IDecreaseQuantityAction
    | IClearCartAction
    | ILoadCartFromStorageAction;

export const addToCart = (product: IProduct): IAddToCartAction => ({
    type: ADD_TO_CART,
    payload: { ...product, quantity: 1 }
});

export const removeFromCart = (id: string): IRemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const increaseQuantity = (id: string): IIncreaseQuantityAction => ({
    type: INCREASE_QUANTITY,
    payload: id
});

export const decreaseQuantity = (id: string): IDecreaseQuantityAction => ({
    type: DECREASE_QUANTITY,
    payload: id
});

export const clearCart = (): IClearCartAction => ({
    type: CLEAR_CART
});

export const loadCartFromStorage = (cart: ICartProduct[]): ILoadCartFromStorageAction => ({
    type: LOAD_CART_FROM_STORAGE,
    payload: cart
});