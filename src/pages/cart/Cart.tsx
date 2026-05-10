import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import Button from "../../components/button/Button";
import ProductsList from "./components/products-list/ProductsList";
import CartSummary from "./components/cart-summary/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ICartState } from "../../store/reducers/cartReducer";
import type { Dispatch } from "redux";
import { clearCart, type CartActionTypes } from "../../store/actions/cartActions";

const Cart: React.FC = () => {
    const { products } = useSelector<RootState, ICartState>(state => state.cart);
    const dispatch = useDispatch<Dispatch<CartActionTypes>>();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);

    const handleClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };

    if (products.length === 0) {
        return <div>Корзина пустая</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Корзина</div>

            <div className={styles.layout}>
                <div className={styles.left}>
                    <ProductsList products={products} />

                    <div className={styles.clearButton}>
                        <Button text='Очистить корзину' type='secondary' onClick={handleClearCart} />
                    </div>
                </div>

                <div className={styles.right}>
                    <CartSummary products={products} />
                </div>
            </div>
        </div>
    );
};

export default Cart;