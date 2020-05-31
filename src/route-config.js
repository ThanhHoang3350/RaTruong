import React from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import OrderPage from './pages/OrderPage';
import AddCustomerPage from './pages/AddCustomerPage';
import AddShipperPage from './pages/AddShipperPage';
import ShipperPage from './pages/ShipperPage';


const routes=[
    {
        path: '/order',
        exact: true,
        main: ()=> <OrderPage/>
    },
    {
        path: '/product',
        exact: true,
        main: ()=> <ProductPage/>
    }, 
    {
        path:'/addproduct',
        exact: true,
        main: ()=> <AddProductPage/>
    },
    {
        path: '/addcustomer',
        exact: true,
        main: ()=> <AddCustomerPage/>
    },
    {
        path: '/addshipper',
        exact: true,
        main: ()=> <AddShipperPage/>
    },
    {
        path: '/shipper',
        exact: true,
        main: ()=> <ShipperPage/>
    },
    {
        path: '',
        exact: true,
        main: ()=> <NotFoundPage/>
    },
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/login',
        exact: true,
        main: ()=> <LoginPage/>
    }
];

export default routes;
