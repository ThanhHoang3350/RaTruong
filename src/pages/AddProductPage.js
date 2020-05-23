import React, {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'antd';
;

function AddCreateProductPage(){
    const dispatch = useDispatch();
    const [product, setProduct] = useReducer(
        (state, newState) =>({...state, ...useState}),
        {
            id: '0',
            productName: '',
            price: '',
            info: '',
            mass: '',
            origin:'',
            status:'',
            typeID:'',
            marketID:'',
        });
        // const handleChange = evt =>{
        //     const name = evt.target.name;
        //     const newValue = evt.target.value;
        //     setProduct({[name]: newValue});
        // }
        // const AddCreateProductPage =()=>{
        //     const datapost ={
        //         id:productName.id,
        //         productName: product.productName,
        //         price: product.price,
        //         info: product.info,
        //         mass: product.mass,
        //         origin: product.origin,
        //         status: product.status,
        //         typeID: product.typeID,
        //         marketID: product.marketID
        //     }
        //     console.log(datapost);
        //     return axios.post()
        // }
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 class="m-0 font-weight-bold text-primary">Them San Pham</h5>
                    </div>
                    <div className="card-body">
                        <form className="user" onSubmit="">
                            <div className="form-group">
                                <label htmlFor="ID">ID</label>
                                <input type="input" value="" onChange="" name="ID" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ProductName">Tên sản phẩm</label>
                                <input type="input" value="" onChange="" name="ProductName" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Price">Giá</label>
                                <input type="input" value="" onChange="" name="Price" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Info">Thông tin</label>
                                <input type="input" value="" onChange="" name="Info" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Mass">Khối Lượng</label>
                                <input type="input" value="" onChange="" name="Mass" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Origin">Xuất xứ</label>
                                <input type="input" value="" onChange="" name="Origin" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ID">ID</label>
                                <input type="input" value="" onChange="" name="ID" class="form-control"></input>
                            </div>
                            {/* <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Ma San Pham
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Ma 1</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </form>
                    </div>
                </div>
            </div>
        );
}
export default AddCreateProductPage;