import React, { useState } from 'react';
import styles from "./CustomerForm.module.css";

export interface ICustomerFormData {
    name: string;
    phone: string;
    email: string;
    address: string;
}

interface ICustomerFormProps {
    onFormDataChange: (data: ICustomerFormData) => void;
}

const CustomerForm: React.FC<ICustomerFormProps> = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState<ICustomerFormData>({
        name: '',
        phone: '',
        email: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;        
        const newData = { ...formData, [name]: value };

        setFormData(newData);
        onFormDataChange(newData);
    };

    return (
        <form className={styles.form}>
            <div className={styles.title}>Данные покупателя</div>

            <div className={styles.fields}>
                <label>
                    ФИО
                    <input
                        name="name"
                        placeholder="Иванов Иван"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Телефон
                    <input
                        name="phone"
                        placeholder="+7(XXX)-XXX-XX-XX"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        placeholder="test@example.ru"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Адрес доставки
                    <textarea
                        name="address"
                        placeholder="Москва, улица Советская"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
    );
};

export default CustomerForm;