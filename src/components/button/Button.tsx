import React from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    type?: 'primary' | 'secondary',
    text?: string;
    className?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({
    type = 'primary', text, className, onClick
}) => {
    return (
        <button
            className={`${styles.button} ${styles[type]} ${className}`}
            onClick={onClick}
        >
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;