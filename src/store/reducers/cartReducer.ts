import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART,
    LOAD_CART_FROM_STORAGE,
} from '../actions/cartActionTypes';
import type { ICartProduct } from '../../interfaces/cart-product.interface';
import type { CartActionTypes } from '../actions/cartActions';

export interface ICartState {
    products: ICartProduct[];
}

const initialState: ICartState = {
    products: []
};

const cartReducer = (
    state: ICartState = initialState,
    action: CartActionTypes
): ICartState => {
    switch (action.type) {
        case LOAD_CART_FROM_STORAGE:
            return {
                ...state,
                products: action.payload
            };

        case ADD_TO_CART: {
            const existingProduct = state.products.find(item => item.id === action.payload.id);
            
            if (existingProduct) {
                if (existingProduct.quantity >= existingProduct.stock) {
                    return state;
                }

                return {
                    ...state,
                    products: state.products.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }

            return {
                ...state,
                products: [...state.products, action.payload]
            };
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            };

        case INCREASE_QUANTITY:
            const existingProduct = state.products.find(item => item.id === action.payload);
            
            if (!existingProduct || existingProduct.quantity >= existingProduct.stock) {
                return state;
            }

            return {
                ...state,
                products: state.products.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };

        case DECREASE_QUANTITY: {
            const existingProduct = state.products.find(item => item.id === action.payload);

            if (existingProduct && existingProduct.quantity === 1) {
                return {
                    ...state,
                    products: state.products.filter(item => item.id !== action.payload)
                };
            }

            return {
                ...state,
                products: state.products.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        }

        case CLEAR_CART:
            return {
                ...state,
                products: []
            };

        default:
            return state;
    }
};

export default cartReducer;