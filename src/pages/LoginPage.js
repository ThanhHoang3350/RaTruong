import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'

import Login from './../components/Login';

function LoginPage() {
	const user = useSelector((state) => state.user);
	if(0 > 1) {
		return <Redirect to="/" />;
	}
  	return (
		<div ><div className="container">
		{/* Outer Row */}
			<div className="row justify-content-center">
				<div className="col-xl-10 col-lg-12 col-md-9">
					<div className="card o-hidden border-0 shadow-lg my-5">
						<div className="card-body p-0">
							{/* Nested Row within Card Body */}
							<div className="row">
								<div className="col-lg-6 d-none d-lg-block bg-login-image" />
									<div className="col-lg-6">
									<Login/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	);
}
export default LoginPage;
