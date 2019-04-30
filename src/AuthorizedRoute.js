import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthorizedRoute extends React.Component{

	render(){
		const { component:Component,path,location} = this.props;
		const {state} = location;
		const {logined} = state || {};
		return (
			<Route 
				render={(props)=>{
					return logined
						? <Component {...props} />
						: <Redirect to="/auth/login" />
				}}
				path={path} />
		);
	}
}

export default AuthorizedRoute;