import React from 'react';
import styles from "./OrderStatus.module.css";
import { useNavigate } from "react-router-dom";
import Button from '../../components/button/Button';

const OrderStatus: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/catalog');
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon} />

                <div className={styles.title}>Заказ оформлен!</div>

                <div className={styles.subtitle}>
                    Спасибо за заказ. Мы получили его и скоро начнем обработку
                </div>

                <div className={styles.info}>
                    <div className={styles.row}>
                        <span>Номер заказа:</span>
                        <span>ЗАК-0932</span>
                    </div>

                    <div className={styles.row}>
                        <span>Статус:</span>
                        <span>Принят</span>
                    </div>

                    <div className={styles.row}>
                        <span>Дата:</span>
                        <span>12.04.2026</span>
                    </div>
                </div>

                <div className={styles.note}>
                    Вы получите письмо с подтверждением на указанный email.
                </div>

                <Button text='Вернуться в каталог' onClick={handleBack} />
            </div>
        </div>
    );
};

export default OrderStatus;