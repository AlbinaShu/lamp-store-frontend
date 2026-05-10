export interface IOrder {
    id: string;
    customer_name: string;
    phone: string;
    email: string;
    address: string;
    total_price: number;
    status: string;
    created_at: string;
}

export interface IOrderItem {
    id: string;
    order_id: string;
    product_id: string;
    product_name: string;
    price: number;
    quantity: number;
}

export interface IFullOrder extends IOrder {
    items: IOrderItem[];
}

export interface ICreateOrderRequest {
    customer_name: string;
    phone: string;
    email: string;
    address: string;
    items: {
        product_id: string;
        product_name: string;
        price: number;
        quantity: number;
    }[];
}

export interface ICreateOrderResponse {
    order_id: string;
}

export interface IGetOrderByIdResponse {
    order: IOrder;
    items: IOrderItem[];
}
