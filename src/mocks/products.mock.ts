import type { IProduct } from "../interfaces/product.interface";

export const PRODUCTS_MOCK: IProduct[] = [
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
    },
    {
        id: '3',
        name: 'Галогенная лампа 75 Вт',
        description:
            'Галогенная лампа с теплым светом, подходит для декоративного и точечного освещения.',
        price: 600,
        type: 'halogen',
        power: 75,
        stock: 200,
        imageUrl: '',
        createdAt: '2025-01-12T10:00:00Z',
        updatedAt: '2025-01-12T10:00:00Z',
    },
    {
        id: '4',
        name: 'Галогенная лампа 50 Вт',
        description:
            'Компактная галогенная лампа для акцентного освещения.',
        price: 450,
        type: 'halogen',
        power: 50,
        stock: 150,
        imageUrl: '',
        createdAt: '2025-01-13T10:00:00Z',
        updatedAt: '2025-01-13T10:00:00Z',
    },
];