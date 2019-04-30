import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class UserNav extends React.Component{

	render(){
		const {match,location} = this.props;
		const {state} = location;
		return (
			<nav className="context-nav">
				<NavLink 
					to={{pathname:`${match.path}`,state}}
					exact 
					activeClassName="active">
					Browse
				</NavLink>
				<NavLink 
					to={{pathname:`${match.path}/add`,state}}
					activeClassName="active">
					Add
				</NavLink>
			</nav>
		);
	}
}

export default withRouter(UserNav);