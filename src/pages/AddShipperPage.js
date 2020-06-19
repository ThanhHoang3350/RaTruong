import React, {useReducer} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
import axios from'axios';

function AddShipperPage() {
	const dispatch = useDispatch();
    const [shipper, setShipper] = useReducer(
		(state, newState) => ({...state, ...newState}),
		{
		id: '0',
		email: '',
		emailVerified: '0',
		phoneNumber:'',
		firstName:'',
		lastName:'',
		type:'shipper',
		password:'',
		walletValue:'0',
		createdAt:'',
		updatedAt:''
	});

	const handleChange = evt => {
		const name = evt.target.name;
    	const newValue = evt.target.value;
        setShipper({[name]: newValue});
	}
	const addShipper =()=>{
		const datapost = {
			id: shipper.id,
			email: shipper.email,
			emailVerified: shipper.emailVerified,
			phoneNumber: shipper.phoneNumber,
			password: shipper.password,
			firstName: shipper.firstName,
			type: shipper.type,
			lastName: shipper.lastName,
			walletValue: shipper.walletValue,
			createdAt: shipper.createdAt,
			updatedAt: shipper.updatedAt
		}
		console.log(datapost);
		return axios.post(`http://localhost:4000/adduser`, datapost)
	}
	const handleSubmit = (event) => {
		addShipper()
			.then(data => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_ADD_SHIPPER_TITLE, notify.NOTI_SIGNIN_SUCCESSFULL_MESSAGE));
			})
			.catch((error) => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_ADD_SHIPPER__FAIL_TITLE, error.message ));
			});
		event.preventDefault();
	}

	return (
		<div className="container-fluid">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Thêm thông tin shipper</h6>
				</div>
				<div className="card-body">
					<form className="user" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="email">First name:</label>
							<input type="input" value={shipper.firstName} onChange={handleChange} name="firstName" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Last name:</label>
							<input type="input" value={shipper.lastName} onChange={handleChange} name="lastName" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Email:</label>
							<input type="input" value={shipper.email} onChange={handleChange} name="email" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Email Verified:</label>
							<input type="input" value={shipper.emailVerified} onChange={handleChange} name="emailVerified" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">password:</label>
							<input type="input" value={shipper.password} onChange={handleChange} name="password" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Phone Number:</label>
							<input type="input" value={shipper.phoneNumber} onChange={handleChange} name="phoneNumber" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Create At:</label>
							<input type="datetime-local" value={shipper.createdAt} onChange={handleChange} name="createdAt" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Update At:</label>
							<input type="datetime-local" value={shipper.updatedAt} onChange={handleChange} name="updatedAt" className="form-control" />
						</div>
						<button type="submit" className="btn btn-success btn-lg">Submit</button>
						<Link to={`/employees`}>
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



export default AddShipperPage;
