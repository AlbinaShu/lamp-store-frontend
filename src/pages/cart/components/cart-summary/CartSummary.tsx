import React from 'react';
import type { ICartProduct } from "../../../../interfaces/cart-product.interface";
import styles from "./CartSummary.module.css";
import Button from '../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

interface ICartSummaryProps {
    products: ICartProduct[];
}

const CartSummary: React.FC<ICartSummaryProps> = ({ products }) => {
    const navigate = useNavigate();
    const totalPrice = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCreateOrder = () => {
        navigate('/order');
     };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.title}>Итого</div>

                <div className={styles.rows}>
                    <div className={styles.row}>
                        <span>Товары</span>
                        <span>{totalPrice} ₽</span>
                    </div>

                    <div className={styles.row}>
                        <span>Доставка</span>
                        <span>При оформлении</span>
                    </div>
                </div>
            </div>


            <div className={styles.total}>
                <div className={styles.row}>
                    <span>Всего</span>
                    <span>{totalPrice} ₽</span>
                </div>

                <Button text='Оформить заказ' onClick={handleCreateOrder}></Button>
            </div>
        </div>
    );
};

export default CartSummary;