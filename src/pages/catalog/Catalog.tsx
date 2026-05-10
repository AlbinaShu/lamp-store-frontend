import React, { useEffect, useState } from 'react';
import Filters from './components/filters/Filters';
import styles from './Catalog.module.css';
import ProductsList from './components/products-list/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { IProductsState } from '../../store/reducers/productsReducer';
import { fetchProducts, type IProductsFilters, type ProductActionTypes } from '../../store/actions/productActions';
import type { ThunkDispatch } from 'redux-thunk';

const Catalog: React.FC = () => {
    const [filters, setFilters] = useState<IProductsFilters>({});
    const { products, loading } = useSelector<RootState, IProductsState>(state => state.products);
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, ProductActionTypes>>();

    useEffect(() => {
        dispatch(fetchProducts(filters));
    }, [filters]);

    const handleFiltersChange = (newFilters: IProductsFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarTitle}>Каталог товаров</div>

                <Filters onFiltersChange={handleFiltersChange}/>
            </div>

            <div className={styles.content}>
                {loading ? <div>Продукты загружаются...</div> : <ProductsList products={products} />}
            </div>
        </div>
    );
};

export default Catalog;