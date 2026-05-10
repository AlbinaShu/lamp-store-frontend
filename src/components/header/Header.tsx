import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { ICartState } from '../../store/reducers/cartReducer';

const Header: React.FC = () => {
    const { products } = useSelector<RootState, ICartState>(state => state.cart);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>ЛАМПЫ РФ</div>

            <div className={styles.links}>
                <Link to="/catalog">Каталог</Link>
                <Link to="/cart">Корзина({products.length})</Link>
            </div>
        </header>
    );
};

export default Header;