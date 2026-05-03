import React from 'react';
import styles from "./ProductItem.module.css";
import type { ICartProduct } from "../../../../interfaces/cart-product.interface";

interface IProductItemProps {
    product: ICartProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image} />

            <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div>{product.type} • {product.power} Вт</div>
                <div className={styles.price}>{product.price} Р за шт.</div>

                <div className={styles.buttons}>
                    <div className={styles.controls}>
                        <button>-</button>
                        <span>{product.quantity}</span>
                        <button>+</button>
                    </div>

                    <button className={styles.remove}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;