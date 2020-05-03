import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import axios from'axios'
import { useDispatch } from 'react-redux';

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

function Customer(customer,getCustomer) {
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
	item = customer.customer !== null ? customer.customer : item;
	let id = item.id
	const dispatch = useDispatch();
	const deleteCustomer =(id)=> {
		axios.delete(`http://localhost:4000/deleteUser/${id}`)
		.catch ( err => { alert(err)})
		Swal.fire(
			'Deleted!',
			'Your custommer has been deleted.',
			'success'
		)
		dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_REMOVE_CUSTOMER_TITLE, notify.NOTI_REMOVE_CUSTOMER_MESSAGE));
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
    <div>zzzz</div>
  );
}

export default Customer;
