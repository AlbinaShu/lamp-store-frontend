import React from 'react';
import styles from './ProductsList.module.css';
import ProductItem from '../product-item/ProductItem';
import type { IProduct } from '../../../../interfaces/product.interface';

interface IProductsListProps {
    products: IProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
    if (!products.length) {
        return <p>Товары не найдены</p>;
    }

    return (
        <div className={styles.container}>
            <div>Найдено товаров: {products.length}</div>

            <div className={styles.products}>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;