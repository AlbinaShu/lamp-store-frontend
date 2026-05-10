import React from 'react';
import Button from '../../../../components/button/Button';
import styles from './ProductItem.module.css';
import type { IProduct } from '../../../../interfaces/product.interface';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import { addToCart, type CartActionTypes } from '../../../../store/actions/cartActions';

interface IProductItemProps {
    product: IProduct;
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<Dispatch<CartActionTypes>>();

    const handleDetailClick = () => {
        navigate(`/product/${product.id}`);
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product as IProduct));
    };

    return (
        <div className={styles.product}>
            <div className={styles.img} />

            <p className={styles.title}>{product.name}</p>
            <p className={styles.price}>{product.price} ₽</p>

            <div className={styles.actions}>
                <Button text='Подробнее' type='secondary' onClick={handleDetailClick} />
                <Button text='В корзину' type='primary' onClick={handleAddToCart} />
            </div>
        </div>
    );
};

export default ProductItem;