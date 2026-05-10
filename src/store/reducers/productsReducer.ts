import type { IProduct } from '../../interfaces/product.interface';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_BY_ID_REQUEST,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE,
} from '../actions/productActionTypes';
import type { ProductActionTypes } from '../actions/productActions';

export interface IProductsState {
    products: IProduct[];
    loading: boolean;
    error: string | null;
    currentProduct: IProduct | null;
    currentProductLoading: boolean;
    currentProductError: string | null;
}

const initialState: IProductsState = {
    products: [],
    loading: false,
    error: null,
    currentProduct: null,
    currentProductLoading: false,
    currentProductError: null,
};

export const productsReducer = (
    state = initialState,
    action: ProductActionTypes
): IProductsState => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
            
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            };
            
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case FETCH_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                currentProductLoading: true,
                currentProductError: null,
                currentProduct: null,
            };
            
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                currentProductLoading: false,
                currentProduct: action.payload,
                currentProductError: null,
            };
            
        case FETCH_PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                currentProductLoading: false,
                currentProductError: action.payload,
                currentProduct: null,
            };    
            
        default:
            return state;
    }
};
