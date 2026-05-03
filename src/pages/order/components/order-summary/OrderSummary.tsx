import React from 'react';
import styles from "./OrderSummary.module.css";
import Button from '../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const OrderSummary: React.FC = () => {
    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        navigate('/order-status');
     };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.title}>Ваш заказ</div>

                <div className={styles.rows}>
                    <div className={styles.row}>
                        <span>Светодиодная лампа х 1</span>
                        <span>1850.00 ₽</span>
                    </div>
                </div>
            </div>


            <div className={styles.total}>
                <div className={styles.row}>
                    <span>Итого</span>
                    <span>1850.00 ₽</span>
                </div>

                <Button text='Оформить заказ' onClick={handleConfirmOrder}></Button>
            </div>
        </div>
    );
};

export default OrderSummary;