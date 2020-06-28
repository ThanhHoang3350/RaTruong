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
import ListRegisterPage from './pages/ListRegisterPage'
import UpdateProductPage from './pages/UpdateProductPage'


const routes=[
    {
        path: '/login',
        exact: true,
        main: ()=> <LoginPage/>
    },
    {
        path: '/listregister',
        exact: true,
        main: ()=> <ListRegisterPage/>
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
        path: '/updateproduct',
        exact: true,
        main: ()=> <UpdateProductPage/>
    },
    {
        path: '/addcustomer',
        exact: true,
        main: ()=> <AddCustomerPage/>
    },
    {
        path: '/addshipper',
        exact: true,
        main: (e)=> <AddShipperPage data={e}/>
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
    }
];

export default routes;
