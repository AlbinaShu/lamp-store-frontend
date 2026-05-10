import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useDispatch } from 'react-redux';
import { loadCartFromStorage, type CartActionTypes } from './store/actions/cartActions';
import type { Dispatch } from 'redux';

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch<CartActionTypes>>();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      dispatch(loadCartFromStorage(JSON.parse(savedCart)));
    }
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
