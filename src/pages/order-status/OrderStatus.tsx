import React, { useEffect } from 'react';
import styles from "./OrderStatus.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { ThunkDispatch } from 'redux-thunk';
import { fetchOrderById, type OrderActionTypes } from '../../store/actions/orderActions';

const OrderStatus: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, OrderActionTypes>>();

    const { currentOrder: order } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        if (id) {
            dispatch(fetchOrderById(id));
        }
    }, [id]);

    const handleBack = () => {
        navigate('/catalog');
    }

    if (!order) {
        return <div>Заказ не найден</div>;
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
                        <span>{new Date(order.created_at).toLocaleDateString()}</span>
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