import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Notify from './Notify';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import routes from './../route-config';

function App() {
  return (
	<Router>
		<div id="wrapper">
			{/* Sidebar */}
			<Sidebar/>
			<Notify/>
			{/* End of Sidebar */}
			{/* Content Wrapper */}
			<div id="content-wrapper" className="d-flex flex-column">
				{/* Main Content */}
				<div id="content">
					<Header/>

					{showRoute(routes)}
				</div>
				{/* End of Main Content */}
				{/* Footer */}
				<Footer/>
				{/* End of Footer */}
			</div>
			{/* End of Content Wrapper */}
		</div>
	</Router>
  );
}

function showRoute(routes){
	let xhtml = null;

	if(routes.length > 0 ){
		xhtml = routes.map((route, index)=> {
			return (
				<Route key={index} exact={route.exact} path={route.path} component={route.main}/>
			);
		});
	}

	return <Switch>{xhtml}</Switch>;
}

export default App;
