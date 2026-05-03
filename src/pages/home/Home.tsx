import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../../components/button/Button';

const Home: React.FC = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/catalog');
    }

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.title}>ЛАМПЫ РФ</div>
                <p className={styles.subtitle}>Профессиональные решения для вашего освещения</p>
                <Button text='Перейти в каталог' onClick={handleButtonClick}></Button>
            </div>
        </div>
    );
};

export default Home;