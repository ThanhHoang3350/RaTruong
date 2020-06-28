import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

function HomePage() {
  	const user = useSelector((state) => state.user);
  	if(0 > 1) {
		return <Redirect to="/login" />;
	}
	return (
		<div className="container-fluid">
			{/* Page Heading */}
			<h1 className="h3 mb-2 text-gray-800">Trang quản trị</h1>
        {/* DataTales Example */}
		</div>
	);
}



export default HomePage;
