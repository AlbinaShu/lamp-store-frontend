import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            Производитель промышленных ламп с 1985 года
        </footer>
    );
};

export default Footer;