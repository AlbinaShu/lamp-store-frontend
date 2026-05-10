import React, { useState } from 'react';
import styles from "./Order.module.css";
import CustomerForm from './components/customer-form/CustomerForm';
import OrderSummary from './components/order-summary/OrderSummary';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { ICreateOrderRequest } from '../../interfaces/order.interface';
import type { ThunkDispatch } from 'redux-thunk';
import { createOrder, type OrderActionTypes } from '../../store/actions/orderActions';
import { clearCart, type CartActionTypes } from '../../store/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const Order: React.FC = () => {
    const [customerData, setCustomerData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });
    const cartProducts = useSelector((state: RootState) => state.cart.products);
    const { createLoading } = useSelector((state: RootState) => state.order);
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, OrderActionTypes | CartActionTypes>>();
    const navigate = useNavigate();

     const handleCustomerDataChange = (data: any) => {
        setCustomerData(data);
    };

    const handleSubmitOrder = async () => {
        if (!customerData.name || !customerData.phone || !customerData.email || !customerData.address) {
            alert('Заполните все поля формы');
            return;
        }

        const orderData: ICreateOrderRequest = {
            customer_name: customerData.name,
            phone: customerData.phone,
            email: customerData.email,
            address: customerData.address,
            items: cartProducts.map(item => ({
                product_id: item.id,
                product_name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
        };

        try {
            const orderId = await dispatch(createOrder(orderData));

            if (orderId) {
                dispatch(clearCart());
                navigate(`/order/${orderId}/status`);
            }
        } catch (err) {
            console.error('Ошибка:', err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Оформление заказа</div>

            <div className={styles.layout}>
                <div className={styles.left}>
                    <CustomerForm onFormDataChange={handleCustomerDataChange}/>
                </div>

                <div className={styles.right}>
                    <OrderSummary loading={createLoading} onSubmit={handleSubmitOrder} />
                </div>
            </div>
        </div>
    );
};

export default Order;