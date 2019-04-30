import React from 'react';
import {
	Switch, 
	Route, 
	Redirect 
} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';


class UnauthorizedLayout extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="unauthorized-layout">
				<Switch>
					<Route 
						path="/auth/login" 
						component={LoginPage} />
	      			<Redirect to="/auth/login" />
				</Switch>
			</div>
		);
	}
}

export default UnauthorizedLayout;