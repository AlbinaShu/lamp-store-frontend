import React, { useState } from "react";
import styles from "./Cart.module.css";
import type { ICartProduct } from "../../interfaces/cart-product.interface";
import { CART_PRODUCTS_MOCK } from "../../mocks/cart-products.mock";
import Button from "../../components/button/Button";
import ProductsList from "./components/products-list/ProductsList";
import CartSummary from "./components/cart-summary/CartSummary";

const Cart: React.FC = () => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>(CART_PRODUCTS_MOCK);

    const handleClearCart = () => { };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Корзина</div>

            <div className={styles.layout}>
                <div className={styles.left}>
                    <ProductsList products={cartProducts} />

                    <div className={styles.clearButton}>
                        <Button text='Очистить корзину' type='secondary' onClick={handleClearCart} />
                    </div>
                </div>

                <div className={styles.right}>
                    <CartSummary products={cartProducts} />
                </div>
            </div>
        </div>
    );
};

export default Cart;