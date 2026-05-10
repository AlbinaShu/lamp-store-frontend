import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Catalog from '../pages/catalog/Catalog';
import ProductDetail from '../pages/product-detail/ProductDetail';
import Cart from '../pages/cart/Cart';
import Order from '../pages/order/Order';
import OrderStatus from '../pages/order-status/OrderStatus';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/catalog', element: <Catalog /> },
            { path: '/product/:id', element: <ProductDetail /> },
            { path: '/cart', element: <Cart /> },
            { path: '/order', element: <Order /> },
            { path: '/order/:id/status', element: <OrderStatus /> },
        ],
    },
]);