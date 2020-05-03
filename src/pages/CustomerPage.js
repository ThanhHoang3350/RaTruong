import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'

import Customer from '../components/Customer';

function CustomerPage() {
	const [customers, setCustomers] = useState([]);
    const user = useSelector((state) => state.user);

	useEffect(()=>{
        const abortController = new AbortController();
        fetch('http://localhost:4000/customer/',{ signal: abortController.signal})
            .then(response => response.json())
            .then(response => setCustomers(response.data))
            .catch(err=>console.error(err))
        return () => {
            abortController.abort();
        };
    }
    ,[])


	let xhtml = null;
    if(customers.length > 0){
        xhtml = customers.map((customer, index)=> {
            return (
				<Customer key={index} customer={customer} index={index}/>
            );
        });
    }

	if(0 > 1) {
	  	return <Redirect to="/login" />;
	}

	return (
		<div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Quản lý khách hàng</h1>
            <p className="mb-4">Thông tin chi tiết những khách hàng</p>
            <Link to={`/addcustomer`}>
                <p className="mb-4">
                    <button type="button" className="btn btn-large btn-success">Thêm khách hàng</button>
                </p>
            </Link>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách khách hàng</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Email Verified</th>
                                    <th>Phone Number</th>
                                    <th>Customer Name</th>
                                    <th>Create At</th>
                                    <th>Update At</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Email Verified</th>
                                    <th>Phone Number</th>
                                    <th>Customer Name</th>
                                    <th>Create At</th>
                                    <th>Update At</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                            {xhtml}
                        </table>
                    </div>
                </div>
            </div>
        </div>
	);
}



export default CustomerPage;
