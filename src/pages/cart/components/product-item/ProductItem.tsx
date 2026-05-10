import React from 'react';
import styles from "./ProductItem.module.css";
import type { ICartProduct } from "../../../../interfaces/cart-product.interface";
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import { decreaseQuantity, increaseQuantity, removeFromCart, type CartActionTypes } from '../../../../store/actions/cartActions';

interface IProductItemProps {
    product: ICartProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
    const dispatch = useDispatch<Dispatch<CartActionTypes>>();

    const handleIncrease = () => {
        dispatch(increaseQuantity(product.id));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(product.id));
    };

    const handleRemove = () => {
        if (window.confirm(`Вы действительно хотите удалить "${product.name}" из корзины?`)) {
            dispatch(removeFromCart(product.id));
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.image} />

            <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div>{product.type} • {product.power} Вт</div>
                <div className={styles.price}>{product.price} Р за шт.</div>

                <div className={styles.buttons}>
                    <div className={styles.controls}>
                        <button onClick={handleDecrease}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>

                    <button className={styles.remove} onClick={handleRemove}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;