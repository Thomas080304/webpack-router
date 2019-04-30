import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import UserNav from '../ui/UserNav';
import BrowseUsersPage from '../pages/BrowseUsersPage';
import AddUserPage from '../pages/AddUserPage';
import UserProfilePage from '../pages/UserProfilePage';

class UserSubLayout extends React.Component{

	render(){
		const {match} = this.props;
		return (
			<div className="user-sub-layout">
				<aside>
					<UserNav />
				</aside>
				<div className="primary-content">
					<Switch>
						<Route path={match.path} exact component={BrowseUsersPage} />
						<Route path={`${match.path}/add`} exact component={AddUserPage} />
						<Route path={`${match.path}/:userId`}  component={UserProfilePage} />
					</Switch>
			    </div>
			</div>
		);
	}
}

export default UserSubLayout;