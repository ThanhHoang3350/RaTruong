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
    <div>Order</div>
  );
}



export default OrderPage;
