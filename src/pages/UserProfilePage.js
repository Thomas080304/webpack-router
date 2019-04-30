import React from 'react';


class UserProfilePage extends React.Component{

	render(){
		const {match} = this.props;
		return (
			<div>
				 User Profile for user: {match.params.userId}
			</div>
		);
	}
}

export default UserProfilePage;