import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'

import Order from '../components/Order';

function OrderPage() {
    const [booking, setBooking] = useState([]);
    const [employees, setEmployees] = useState([]);
    const user = useSelector((state) => state.user);
	const getBooking =()=> {
        fetch('http://localhost:4000/booking/')
            .then(response => response.json())
            .then(response => setBooking(response.data))
            .catch(err=>console.error(err))
        fetch('http://localhost:4000/shipper/')
            .then(response => response.json())
            .then(response => setEmployees(response.data))
            .catch(err=>console.error(err))
    }
	useEffect(getBooking,[])

	let xhtml = null;
    if(booking.length > 0){
        xhtml = booking.map((booking, index)=> {
            return (
				<Order key={index} booking={booking} employees={employees} index={index}/>
            );
        });
    }

	if(0 > 1) {
		return <Redirect to="/login" />;
	}

	return (
		<div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Quản lý đơn hàng</h1>
        <p className="mb-4">Thông tin chi tiết những đơn hàng</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Danh sách đơn hàng</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Customer Name</th>
                                <th>Description</th>
                                <th>Address</th>
                                <th>Shipper Name</th>
                                <th>Feedback</th>
                                <th>Service Name</th>
                                <th>Rating</th>
                                <th>Created At</th>
                                <th>Update At</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Customer Name</th>
                                <th>Description</th>
                                <th>Address</th>
                                <th>Shipper Name</th>
                                <th>Feedback</th>
                                <th>Service Name</th>
                                <th>Rating</th>
                                <th>Created At</th>
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



export default OrderPage;
