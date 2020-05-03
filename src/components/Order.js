import React from 'react';

function Order(booking) {
    let item = {
		id: '',
		firstName: '',
		lastName: '',
		shipperId:'',
		name:'',
		description:'',
		address:'',
		rating:'',
		feedback:'',
		createdAt:'',
		updatedAt:'',
	}
	item = booking.booking !== null ? booking.booking : item;
	let employees = booking.employees
	let fistNameShipper = null;
    if(employees.length > 0){
        fistNameShipper = employees.map((employee)=> {
			if(employee.id === item.shipperId){
				return (
					employee.firstName
				);
			}  
			return fistNameShipper; 
        });
	}
	
	let lastNameShipper = null;
    if(employees.length > 0){
        lastNameShipper = employees.map((employee)=> {
			if(employee.id === item.shipperId){
				return (
					employee.lastName
				);
			}
        return lastNameShipper;
        });
    }
	
  	return (
		<tbody>
			<tr>
				<td>{item.id}</td>
				<td>{item.firstName} {item.lastName}</td>
				<td>{item.description}</td>
				<td>{item.address}</td>
				<td>{fistNameShipper} {lastNameShipper}</td>
				<td>{item.feedback}</td>
				<td>{item.name}</td>
				<td>{item.rating}</td>
				<td>{item.createdAt}</td>
				<td>{item.updatedAt}</td>
				<td></td>
			</tr>
		</tbody>
   );
}

export default Order;
