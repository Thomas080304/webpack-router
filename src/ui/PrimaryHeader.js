import React from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import history from '../history';

class PrimaryHeader extends React.Component{

	render(){
		const {location} = this.props;
		const {state} = location;
		return (
			<header className="primary-header">
				<h1>Welcome to our app!</h1>
				<nav>
					<NavLink 
						to={{pathname:"/app",state}}
						exact 
						activeClassName="active">
						Home
					</NavLink>
					<NavLink 
						to={{pathname:"/app/users",state}}
						activeClassName="active">
						Users
					</NavLink>
					<NavLink 
						to={{pathname:"/app/products",state}}
						activeClassName="active">
						Products
					</NavLink>
				</nav>
			</header>
		);
	}
}

export default withRouter(PrimaryHeader);