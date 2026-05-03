import React from "react";
import styles from './ProductsList.module.css';
import type { ICartProduct } from "../../../../interfaces/cart-product.interface";
import ProductItem from "../product-item/ProductItem";

interface IProductsListProps {
    products: ICartProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
    return (
        <div className={styles.products}>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default ProductsList;