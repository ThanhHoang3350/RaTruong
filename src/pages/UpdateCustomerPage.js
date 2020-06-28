import React, {useEffect,useReducer} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from'axios'

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
;

function UpdateCustomerPage(match) {
	const dispatch = useDispatch();
	const [customer, setCustomer] =useReducer(
		(state, newState) => ({...state, ...newState}),
		{
		id: '',
		email: '',
		emailVerified: '',
		phoneNumber:'',
		firstName:'',
		lastName:'',
		type:'',
		walletValue:'',
		createdAt:'',
		updatedAt:''
	});
	let id = match.match.params.id;
	useEffect(()=>{
        const abortController = new AbortController();
		fetch(`http://localhost:4000/user/${id}`,{ signal: abortController.signal})
			.then(response => response.json())
			.then(response => setCustomer(response.data[0]))
			.catch(err=>console.error(err))
        return () => {
            abortController.abort();
        };
    },[id])

	const handleChange = evt => {
		const name = evt.target.name;
    	const newValue = evt.target.value;
        setCustomer({[name]: newValue});
    }

	const updateCustomer =()=>{
		let id = match.match.params.id;
		const datapost = {
			email: customer.email,
			phoneNumber: customer.phoneNumber,
			firstName: customer.firstName,
			lastName: customer.lastName
		}
		return axios.post(`http://localhost:4000/user/${id}`, datapost)
	}

	const handleSubmit = (event) => {
		updateCustomer();
		dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_UPDATE_CUSTOMER_TITLE, notify.NOTI_UPDATE_CUSTOMER_MESSAGE))
		event.preventDefault();
	}
	return (
		<div className="container-fluid">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Cập nhật thông tin khách hàng</h6>
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
							<label htmlFor="pwd">Email Verified:</label>
							<input type="input" value={customer.emailVerified} onChange={handleChange} name="emailVerified" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Phone Number:</label>
							<input type="input" value={customer.phoneNumber} onChange={handleChange} name="phoneNumber" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Create At:</label>
							<input type="input" value={customer.createdAt} onChange={handleChange} name="createAt" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Update At:</label>
							<input type="input" value={customer.updatedAt} onChange={handleChange} name="updateAt" className="form-control" />
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

export default UpdateCustomerPage;
