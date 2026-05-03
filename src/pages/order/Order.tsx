import React from 'react';
import styles from "./Order.module.css";
import CustomerForm from './components/customer-form/CustomerForm';
import OrderSummary from './components/order-summary/OrderSummary';

const Order: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Оформление заказа</div>

            <div className={styles.layout}>
                <div className={styles.left}>
                    <CustomerForm />
                </div>

                <div className={styles.right}>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};

export default Order;