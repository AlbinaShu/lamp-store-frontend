import React from 'react';
import styles from './Filters.module.css';
import Button from '../../../../components/button/Button';

const Filters: React.FC = () => {
    const handleReset = () => { };

    return (
        <div className={styles.filters}>
            <div className={styles.title}>Фильтры</div>

            <div className={styles.filter}>
                <label>Тип</label>
                <select className={styles.selectField}>
                    <option value="all">Все типы</option>
                    <option value="led">Светодиодные</option>
                    <option value="halogen">Галогенные</option>
                    <option value="incandescent">Лампы накаливания</option>
                </select>
            </div>

            <div className={styles.filter}>
                <label>Мощность</label>
                <select className={styles.selectField}>
                    <option value="all">Вся мощность</option>
                    <option value="60">60 Вт</option>
                    <option value="75">75 Вт</option>
                    <option value="100">100 Вт</option>
                </select>
            </div>

            <div className={styles.filter}>
                <label>Цена</label>
                <select className={styles.selectField}>
                    <option value="all">Любая цена</option>
                    <option value="0-1000">до 1000 ₽</option>
                    <option value="1000-2000">1000–2000 ₽</option>
                    <option value="2000-5000">2000–5000 ₽</option>
                </select>
            </div>

            <Button text='Сбросить фильтры' type='secondary' onClick={handleReset}></Button>
        </div>
    );
};

export default Filters;