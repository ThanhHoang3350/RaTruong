import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'

import Employees from '../components/Employees';

function EmployeesPage() {
	const [employees, setEmployees] = useState([]);
	const user = useSelector((state) => state.user);

	useEffect(()=>{
        const abortController = new AbortController();
        fetch('http://localhost:4000/shipper/',{ signal: abortController.signal})
            .then(response => response.json())
            .then(response => setEmployees(response.data))
            .catch(err=>console.error(err))
        return () => {
            abortController.abort();
        };
    }
    ,[])

	let xhtml = null;
    if(employees.length > 0){
        xhtml = employees.map((employee, index)=> {
            return (
				<Employees key={index} employee={employee} index={index}/>
            );
        });
    }

	if(0 > 1) {
	  	return <Redirect to="/login" />;
	}

	return (
    <div>Employees</div>
	);
}



export default EmployeesPage;
