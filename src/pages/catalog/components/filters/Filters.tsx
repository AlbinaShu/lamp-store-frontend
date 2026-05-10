import React, { useState } from 'react';
import styles from './Filters.module.css';
import Button from '../../../../components/button/Button';
import type { IProductsFilters } from '../../../../store/actions/productActions';

interface IFiltersProps {
    onFiltersChange: (filters: IProductsFilters) => void;
}

const Filters: React.FC<IFiltersProps> = ({ onFiltersChange }) => {
    const [type, setType] = useState('all');
    const [power, setPower] = useState('all');
    const [priceRange, setPriceRange] = useState('all');

    const handleReset = () => {
        setType('all');
        setPower('all');
        setPriceRange('all');
        onFiltersChange({});
    };

    const handleApply = () => {
        const filters: IProductsFilters = {};

        if (type !== 'all') {
            filters.type = type;
        }

        if (power !== 'all') {
            filters.power = Number(power);
        }

        if (priceRange !== 'all') {
            if (priceRange === '0-500') {
                filters.price_from = 0;
                filters.price_to = 500;
            } else if (priceRange === '500-1000') {
                filters.price_from = 500;
                filters.price_to = 1000;
            } else if (priceRange === '1000-2000') {
                filters.price_from = 1000;
                filters.price_to = 2000;
            }
        }

        onFiltersChange(filters);
    };

    return (
        <div className={styles.filters}>
            <div className={styles.title}>Фильтры</div>

            <div className={styles.filter}>
                <label>Тип</label>
                <select className={styles.selectField}   
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                >
                    <option value="all">Все типы</option>
                    <option value="led">Светодиодные</option>
                    <option value="halogen">Галогенные</option>
                    <option value="incandescent">Лампы накаливания</option>
                </select>
            </div>

            <div className={styles.filter}>
                <label>Мощность</label>
                <select className={styles.selectField} 
                        value={power}
                        onChange={(e) => setPower(e.target.value)}
                >
                    <option value="all">Вся мощность</option>
                    <option value="60">60 Вт</option>
                    <option value="75">75 Вт</option>
                    <option value="100">100 Вт</option>
                </select>
            </div>

            <div className={styles.filter}>
                <label>Цена</label>
                <select className={styles.selectField}
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="all">Любая цена</option>
                    <option value="0-500">0-500 Р</option>
                    <option value="500-1000">500–1000 ₽</option>
                    <option value="1000-2000">1000–2000 ₽</option>
                </select>
            </div>

            <Button text='Применить фильтры' type='primary' onClick={handleApply}></Button>
            <Button text='Сбросить фильтры' type='secondary' onClick={handleReset}></Button>
        </div>
    );
};

export default Filters;