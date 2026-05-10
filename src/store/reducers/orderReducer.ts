import type { IFullOrder } from '../../interfaces/order.interface';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    FETCH_ORDER_BY_ID_REQUEST,
    FETCH_ORDER_BY_ID_SUCCESS,
    FETCH_ORDER_BY_ID_FAILURE,
} from '../actions/orderActionTypes';
import type { OrderActionTypes } from '../actions/orderActions';

export interface IOrderState {
    currentOrder: IFullOrder | null;
    orderId: string | null;
    createLoading: boolean;
    createError: string | null;
    getOrderLoading: boolean;
    getOrderError: string | null;
}

const initialState: IOrderState = {
    currentOrder: null,
    orderId: null,
    createLoading: false,
    createError: null,
    getOrderLoading: false,
    getOrderError: null,
};

const orderReducer = (
    state: IOrderState = initialState,
    action: OrderActionTypes
): IOrderState => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                createLoading: true,
                createError: null,
            };

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                createLoading: false,
                orderId: action.payload.id,
                createError: null,
            };

        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                createLoading: false,
                createError: action.payload,
            };

        case FETCH_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                getOrderLoading: true,
                getOrderError: null,
            };

        case FETCH_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                getOrderLoading: false,
                currentOrder: { ...action.payload.order, items: action.payload.items },
                getOrderError: null,
            };

        case FETCH_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                getOrderLoading: false,
                getOrderError: action.payload,
            };

        default:
            return state;
    }
};

export default orderReducer;