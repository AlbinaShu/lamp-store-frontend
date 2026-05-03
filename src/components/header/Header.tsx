import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ЛАМПЫ РФ</div>

            <div className={styles.links}>
                <Link to="/catalog">Каталог</Link>
                <Link to="/cart">Корзина(0)</Link>
            </div>
        </header>
    );
};

export default Header;