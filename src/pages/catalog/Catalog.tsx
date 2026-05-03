import React, { useState } from 'react';
import Filters from './components/filters/Filters';
import styles from './Catalog.module.css';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';
import ProductsList from './components/products-list/ProductsList';

const Catalog: React.FC = () => {
    const [products, setProducts] = useState(PRODUCTS_MOCK);

    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarTitle}>Каталог товаров</div>

                <Filters />
            </div>

            <div className={styles.content}>
                <ProductsList products={products} />
            </div>
        </div>
    );
};

export default Catalog;