import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import styles from './ProductDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { IProductsState } from '../../store/reducers/productsReducer';
import type { ThunkDispatch } from 'redux-thunk';
import { fetchProductById, type ProductActionTypes } from '../../store/actions/productActions';
import { addToCart, type CartActionTypes } from '../../store/actions/cartActions';
import type { IProduct } from '../../interfaces/product.interface';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { currentProduct: product, currentProductLoading: loading } = useSelector<RootState, IProductsState>(state => state.products);
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, ProductActionTypes | CartActionTypes>>();

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product as IProduct));
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    if (loading) {
        return <div>Продукт загружается...</div>;
    }

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <Link to="/catalog" className={styles.back}>
                    ← Вернуться в каталог
                </Link>

                <div className={styles.card}>
                    <div className={styles.img}></div>

                    <div className={styles.info}>
                        <div className={styles.title}>{product.name}</div>
                        <div className={styles.price}>{product.price} ₽</div>

                        <div className={styles.meta}>
                            <div>Тип: <span>{product.type}</span></div>
                            <div>Мощность: <span>{product.power} Вт</span></div>
                            <div>Остаток: <span>{product.stock} шт.</span></div>
                        </div>

                        <div className={styles.actions}>
                            <Button text='Добавить в корзину' type='primary' onClick={handleAddToCart} />
                            <Button text='Перейти в корзину' type='secondary' onClick={handleGoToCart} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <h2>Описание</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;