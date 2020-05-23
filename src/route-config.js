import React from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
//import EmployeesPage from './pages/EmployeesPage';
import OrderPage from './pages/OrderPage';
import UpdateCustomerPage from './pages/UpdateCustomerPage';
import UpdateShipperPage from './pages/UpdateShipperPage';
import AddCustomerPage from './pages/AddCustomerPage';
import AddShipperPage from './pages/AddShipperPage';
import AddCreateProductPage from './pages/AddProductPage';


const routes=[
    {
        path: '/customer',
        exact: true,
        main: ()=> <CustomerPage/>
    },
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
    // {
    //     path: '/employees',
    //     exact: true,
    //     main: ()=> <EmployeesPage/>
    // },
    {
        path: '/addcustomer',
        exact: true,
        main: ()=> <AddCustomerPage/>
    },
    {
        path: '/addproduct',
        exact: true,
        main: ()=><AddCreateProductPage/>
    },
    {
        path: '/addshipper',
        exact: true,
        main: ()=> <AddShipperPage/>
    },
    {
        path: '/customer/:id',
        exact: true,
        main: ({match}) => <UpdateCustomerPage match={match} />
    },
    {
        path: '/shipper/:id',
        exact: true,
        main: ({match}) => <UpdateShipperPage match={match} />
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
    },
];

export default routes;
