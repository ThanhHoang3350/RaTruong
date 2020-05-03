import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import axios from'axios';
import { useDispatch } from 'react-redux';

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

function Employees(employee) {
    let item ={
		id: '',
		email: '',
		emailVerified: '',
		phoneNumber:'',
		firstName:'',
		lastName:'',
		type:'',
		walletValue:'',
		createdAt:'',
		updatedAt:'',
	}
	item = employee.employee !== null ? employee.employee : item;
	let id = item.id;
	const dispatch = useDispatch();
	const deleteCustomer =(id)=> {
		axios.delete(`http://localhost:4000/deleteUser/${id}`)	
		.catch ( err => { alert(err)})
		Swal.fire(
			'Deleted!',
			'Your custommer has been deleted.',
			'success'
		)
		dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_REMOVE_SHIPPER_TITLE, notify.NOTI_REMOVE_SHIPPER_MESSAGE));
		return axios;
    }
	
	const HandleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it'
		  }).then((result) => {
			if (result.value) {
				deleteCustomer(id)
			} else if (result.dismiss === Swal.DismissReason.cancel) {
			  Swal.fire(
				'Cancelled',
				'Your imaginary file is safe :)',
				'error'
			  )
			}
		  })	
		  
	}
  return (
        <tbody>
            <tr>
				<td>{item.id}</td>
				<td>{item.email}</td>
				<td>{item.emailVerified}</td>
				<td>{item.phoneNumber}</td>
				<td>{item.firstName} {item.lastName}</td>
				<td>{item.walletValue}</td>
				<td>{item.createdAt}</td>
				<td>{item.updatedAt}</td>
                <td>
					<Link to={`shipper/${item.id}`}>
						<button type="button" className="btn btn-warning btn-sm">
							sửa
						</button>
					</Link>
					<button onClick={()=> HandleDelete(id)} type="button" className="btn btn-danger btn-sm">xóa</button>
                </td>
            </tr>
        </tbody>
  );
}

export default Employees;
