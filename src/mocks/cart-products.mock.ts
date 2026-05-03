import type { ICartProduct } from "../interfaces/cart-product.interface";

export const CART_PRODUCTS_MOCK: ICartProduct[] = [
    {
        id: '1',
        name: 'Светодиодная лампа 60 Вт',
        description:
            'Энергоэффективная светодиодная лампа для промышленного и бытового освещения. Долгий срок службы и низкое энергопотребление.',
        price: 850,
        type: 'led',
        power: 60,
        stock: 120,
        imageUrl: '',
        createdAt: '2025-01-10T10:00:00Z',
        updatedAt: '2025-01-10T10:00:00Z',
        quantity: 1,
    },
    {
        id: '2',
        name: 'Светодиодная лампа 100 Вт',
        description:
            'Мощная LED лампа для больших помещений. Яркий свет и высокая эффективность.',
        price: 1450,
        type: 'led',
        power: 100,
        stock: 80,
        imageUrl: '',
        createdAt: '2025-01-11T10:00:00Z',
        updatedAt: '2025-01-11T10:00:00Z',
        quantity: 2,
    },
];