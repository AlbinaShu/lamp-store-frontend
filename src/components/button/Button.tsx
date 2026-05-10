import React from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    type?: 'primary' | 'secondary',
    text?: string;
    className?: string;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({
    type = 'primary', text, className, onClick, disabled
}) => {
    return (
        <button 
            className={`${styles.button} ${styles[type]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;