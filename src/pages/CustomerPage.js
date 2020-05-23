import React, {useEffect,useState} from 'react';
//import './PageCustomer.css';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

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
    <div className="Wrap-page-customer">Customerzzzzzz</div>
	);
}



export default CustomerPage;
