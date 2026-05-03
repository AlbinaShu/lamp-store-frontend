import React from 'react';
import styles from "./CustomerForm.module.css";

const CustomerForm: React.FC = () => {
    return (
        <form className={styles.form}>
            <div className={styles.title}>Данные покупателя</div>

            <div className={styles.fields}>
                <label>
                    ФИО
                    <input
                        name="name"
                        placeholder="Иванов Иван"
                    />
                </label>

                <label>
                    Телефон
                    <input
                        name="phone"
                        placeholder="+7(XXX)-XXX-XX-XX"
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        placeholder="test@example.ru"
                    />
                </label>

                <label>
                    Адрес доставки
                    <textarea
                        name="address"
                        placeholder="Москва, улица Советская"
                    />
                </label>
            </div>
        </form>
    );
};

export default CustomerForm;