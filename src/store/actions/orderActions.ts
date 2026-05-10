import type { Dispatch } from 'redux';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    FETCH_ORDER_BY_ID_REQUEST,
    FETCH_ORDER_BY_ID_SUCCESS,
    FETCH_ORDER_BY_ID_FAILURE,
} from './orderActionTypes';
import type { ICreateOrderRequest, ICreateOrderResponse, IGetOrderByIdResponse } from '../../interfaces/order.interface';

export interface ICreateOrderRequestAction {
    type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccessAction {
    type: typeof CREATE_ORDER_SUCCESS;
    payload: { id: string }
}

export interface ICreateOrderFailureAction {
    type: typeof CREATE_ORDER_FAILURE;
    payload: string;
}

export interface IFetchOrderByIdRequestAction {
    type: typeof FETCH_ORDER_BY_ID_REQUEST;
}

export interface IFetchOrderByIdSuccessAction {
    type: typeof FETCH_ORDER_BY_ID_SUCCESS;
    payload: IGetOrderByIdResponse;
}

export interface IFetchOrderByIdFailureAction {
    type: typeof FETCH_ORDER_BY_ID_FAILURE;
    payload: string;
}

export type OrderActionTypes =
    | ICreateOrderRequestAction
    | ICreateOrderSuccessAction
    | ICreateOrderFailureAction
    | IFetchOrderByIdRequestAction
    | IFetchOrderByIdSuccessAction
    | IFetchOrderByIdFailureAction

export const createOrderRequest = (): ICreateOrderRequestAction => ({
    type: CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = (orderId: string): ICreateOrderSuccessAction => ({
    type: CREATE_ORDER_SUCCESS,
    payload: { id: orderId },
});

export const createOrderFailure = (error: string): ICreateOrderFailureAction => ({
    type: CREATE_ORDER_FAILURE,
    payload: error,
});

export const fetchOrderByIdRequest = (): IFetchOrderByIdRequestAction => ({
    type: FETCH_ORDER_BY_ID_REQUEST,
});

export const fetchOrderByIdSuccess = (order: IGetOrderByIdResponse): IFetchOrderByIdSuccessAction => ({
    type: FETCH_ORDER_BY_ID_SUCCESS,
    payload: order,
});

export const fetchOrderByIdFailure = (error: string): IFetchOrderByIdFailureAction => ({
    type: FETCH_ORDER_BY_ID_FAILURE,
    payload: error,
});

export const createOrder = (orderData: ICreateOrderRequest) => {
    return async (dispatch: Dispatch<OrderActionTypes>): Promise<string | null> => {
        dispatch(createOrderRequest());

        try {
            const response = await fetch(`${import.meta.env.VITE_ORDER_SERVICE_API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: ICreateOrderResponse = await response.json();

            dispatch(createOrderSuccess(data.order_id));

            return data.order_id;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ошибка создания заказа';

            dispatch(createOrderFailure(errorMessage));

            return null;
        }
    };
};

export const fetchOrderById = (orderId: string) => {
    return async (dispatch: Dispatch<OrderActionTypes>) => {
        dispatch(fetchOrderByIdRequest());

        try {
            const response = await fetch(`${import.meta.env.VITE_ORDER_SERVICE_API_URL}/orders/${orderId}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            dispatch(fetchOrderByIdSuccess(data));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ошибка получения заказа';
            
            dispatch(fetchOrderByIdFailure(errorMessage));
        }
    };
};