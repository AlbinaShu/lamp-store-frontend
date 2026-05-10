import type { Dispatch } from 'redux';
import type { IProduct } from '../../interfaces/product.interface';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_BY_ID_REQUEST,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE,
} from './productActionTypes';

interface IFetchProductsRequestAction {
    type: typeof FETCH_PRODUCTS_REQUEST;
}

interface IFetchProductsSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

interface IFetchProductsFailureAction {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: string;
}

export interface IFetchProductByIdRequestAction {
    type: typeof FETCH_PRODUCT_BY_ID_REQUEST;
}

export interface IFetchProductByIdSuccessAction {
    type: typeof FETCH_PRODUCT_BY_ID_SUCCESS;
    payload: IProduct;
}

export interface IFetchProductByIdFailureAction {
    type: typeof FETCH_PRODUCT_BY_ID_FAILURE;
    payload: string;
}

export type ProductActionTypes =
    | IFetchProductsRequestAction
    | IFetchProductsSuccessAction
    | IFetchProductsFailureAction
    | IFetchProductByIdRequestAction
    | IFetchProductByIdSuccessAction
    | IFetchProductByIdFailureAction;

export interface IProductsFilters {
    type?: string;
    power?: number;
    price_from?: number;
    price_to?: number;
}

export const fetchProductsRequest = (): IFetchProductsRequestAction => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: IProduct[]): IFetchProductsSuccessAction => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error: string): IFetchProductsFailureAction => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});

export const fetchProductByIdRequest = (): IFetchProductByIdRequestAction => ({
    type: FETCH_PRODUCT_BY_ID_REQUEST,
});

export const fetchProductByIdSuccess = (product: IProduct): IFetchProductByIdSuccessAction => ({
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product,
});

export const fetchProductByIdFailure = (error: string): IFetchProductByIdFailureAction => ({
    type: FETCH_PRODUCT_BY_ID_FAILURE,
    payload: error,
});

export const fetchProducts = (filters?: IProductsFilters) => {
    return async (dispatch: Dispatch<ProductActionTypes>) => {
        dispatch(fetchProductsRequest());

        try {
            const queryParams = new URLSearchParams();
            
            if (filters?.type) {
                queryParams.append('type', filters.type);
            }
            
            if (filters?.power) {
                queryParams.append('power', filters.power.toString());
            }
            
            if (filters?.price_from) {
                queryParams.append('price_from', filters.price_from.toString());
            }
            
            if (filters?.price_to) {
                queryParams.append('price_to', filters.price_to.toString());
            }

            const url = `${import.meta.env.VITE_PRODUCT_SERVICE_API_URL}/products${queryParams.toString() ? `?${queryParams}` : ''}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: IProduct[] = await response.json();

            dispatch(fetchProductsSuccess(data));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки товаров';

            dispatch(fetchProductsFailure(errorMessage));
        }
    };
};

export const fetchProductById = (id: string) => {
    return async (dispatch: Dispatch<ProductActionTypes>) => {
        dispatch(fetchProductByIdRequest());

        try {
            const response = await fetch(`${import.meta.env.VITE_PRODUCT_SERVICE_API_URL}/products/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: IProduct = await response.json();

            dispatch(fetchProductByIdSuccess(data));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки товара';

            dispatch(fetchProductByIdFailure(errorMessage));
        }
    };
};