import React, {useReducer, useState} from 'react';
import MultiSelect from "react-multi-select-component";// 
import {Link} from 'react-router-dom';
// import axios from 'axios'

// import { actChangeNotify} from './../actions/index';
// import * as notify from './../constants/Notify';
import { useDispatch } from 'react-redux';
// import { Dropdown, Menu } from 'antd';
;

function AddCreateProductPage(){
    const dispath = useDispatch();
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


        const options =[
            {label: "MX1", value:"MX1"},
            {label: "MX2", value:"MX2"},
            {label: "MX3", value:"MX3"},
        ];
        const options2 =[
            {label: "KT1", value:"KT1"},
            {label: "KT2", value:"KT2"},
            {label: "KT3", value:"KT3"},
        ];
        const [selected, setSelected] = useState([]);
        const [selected2, setSelected2] = useState([]);



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
                            <div>
                                <pre>Tên Loại Sản Phẩm</pre>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy={"Select"}/>
                            </div>
                            <div>
                                <pre>Tên Siêu Thị</pre>
                                <MultiSelect
                                    options={options2}
                                    value={selected2}
                                    onChange={setSelected2}
                                    labelledBy={"Select"}/>
                            </div>
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            <Link to={`/customer`}>
							<button type="button" className="btn btn-lg">
								Back
							</button>
						</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
}
export default AddCreateProductPage;