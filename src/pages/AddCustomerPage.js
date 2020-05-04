import React, {useReducer} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from'axios'

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
;

function AddCustomerPage() {
	const dispatch = useDispatch();
	const [customer, setCustomer] =useReducer(
		(state, newState) => ({...state, ...newState}),
		{
		id: '0',
		email: '',
		emailVerified: '0',
		phoneNumber:'',
		firstName:'',
		lastName:'',
		type:'customer',
		password:'',
		walletValue:'0',
		createdAt:'',
		updatedAt:''
	});

	const handleChange = evt => {
		const name = evt.target.name;
    	const newValue = evt.target.value;
        setCustomer({[name]: newValue});
    }

	const addCustomer =()=>{
		const datapost = {
			id: customer.id,
			email: customer.email,
			emailVerified: customer.emailVerified,
			phoneNumber: customer.phoneNumber,
			password: customer.password,
			firstName: customer.firstName,
			type: customer.type,
			lastName: customer.lastName,
			walletValue: customer.walletValue,
			createdAt: customer.createdAt,
			updatedAt: customer.updatedAt
		}
		console.log(datapost);
		return axios.post(`http://localhost:4000/adduser`, datapost)
	}
	const handleSubmit = (event) => {
		addCustomer()
			.then(data => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_ADD_CUSTOMER_TITLE, notify.NOTI_ADD_CUSTOMER_MESSGAE));
			})
			.catch((error) => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_ADD_CUSTOMER_FAIL_TITLE, error.message ));
			});
		event.preventDefault();
	}
	return (
		<div className="container-fluid">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Thêm thông tin khách hàng</h6>
				</div>
				<div className="card-body">
					<form className="user" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="email">Fist Name:</label>
							<input type="input" value={customer.firstName} onChange={handleChange} name="firstName" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Last Name:</label>
							<input type="input" value={customer.lastName} onChange={handleChange} name="lastName" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Email:</label>
							<input type="input" value={customer.email} onChange={handleChange} name="email" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Password:</label>
							<input type="input" value={customer.password} onChange={handleChange} name="password" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Phone Number:</label>
							<input type="input" value={customer.phoneNumber} onChange={handleChange} name="phoneNumber" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Create At:</label>
							<input type="datetime-local" value={customer.createdAt} onChange={handleChange} name="createdAt" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Update At:</label>
							<input type="datetime-local" value={customer.updatedAt} onChange={handleChange} name="updatedAt" className="form-control" />
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



export default AddCustomerPage;
