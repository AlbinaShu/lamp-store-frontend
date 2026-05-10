import React from 'react';
import styles from "./OrderSummary.module.css";
import Button from '../../../../components/button/Button';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';

interface IOrderSummaryProps {
    onSubmit: () => void;
    loading: boolean;
}

const OrderSummary: React.FC<IOrderSummaryProps> = ({ loading, onSubmit }) => {
    const cartProducts = useSelector((state: RootState) => state.cart.products);

    const totalPrice = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.title}>Ваш заказ</div>

                <div className={styles.rows}>
                    {cartProducts.map(item => (
                        <div key={item.id} className={styles.row}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>{(item.price).toLocaleString()} ₽</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className={styles.total}>
                <div className={styles.row}>
                    <span>Итого</span>
                    <span>{totalPrice} ₽</span>
                </div>

                <Button text='Оформить заказ' disabled={loading} onClick={onSubmit}></Button>
            </div>
        </div>
    );
};

export default OrderSummary;