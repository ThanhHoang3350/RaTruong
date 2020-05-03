import React, {useEffect,useReducer} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
import axios from'axios';

function UpdateShipperPage(match) {
	const dispatch = useDispatch();
    const [shipper, setShipper] = useReducer(
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
	useEffect(()=> {
		const abortController = new AbortController();	
		fetch(`http://localhost:4000/user/${id}`,{ signal: abortController.signal})
			.then(response => response.json())
			.then(response => setShipper(response.data[0]))
			.catch(err=>console.error(err))
        return () => {
            abortController.abort();
        };
	} ,[id])

	const handleChange = evt => {
		const name = evt.target.name;
    	const newValue = evt.target.value;
        setShipper({[name]: newValue});
    }

	const updateShipper=()=>{
		let id = match.match.params.id;
		const datapost = {
			email: shipper.email,
			phoneNumber: shipper.phoneNumber,
			firstName: shipper.firstName,
			lastName: shipper.lastName
		}
		return axios.post(`http://localhost:4000/user/${id}`, datapost)	
	}

	const handleSubmit = (event) => {
		updateShipper();	
		dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_UPDATE_SHIPPER_TITLE, notify.NOTI_UPDATE_SHIPPER_MESSAGE))
		event.preventDefault();
	}
	
	return (
		<div className="container-fluid">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Cập nhật thông tin shipper</h6>
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
							<label htmlFor="pwd">Wallet:</label>
							<input type="input" value={shipper.walletValue} onChange={handleChange} name="Wallet" className="form-control" />
						</div>	
						<div className="form-group">
							<label htmlFor="pwd">Phone Number:</label>
							<input type="input" value={shipper.phoneNumber} onChange={handleChange} name="phoneNumber" className="form-control" />
						</div>	
						<div className="form-group">
							<label htmlFor="pwd">Create At:</label>
							<input type="input" value={shipper.createdAt} onChange={handleChange} name="createAt" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Update At:</label>
							<input type="input" value={shipper.updatedAt} onChange={handleChange} name="updateAt" className="form-control" />
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



export default UpdateShipperPage;
