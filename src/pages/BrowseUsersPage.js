import React from 'react';
import { Link } from 'react-router-dom';

class BrowseUsersPage extends React.Component{

	render(){
		const {match,location} = this.props;
		const {state} = location;
		return (
			<div>
				Browse Users
				<ul>
					<li>
						<Link 
							to={{pathname:`${match.path}/1`,state}}>
							Brad
						</Link>
					</li>
					<li>
						<Link 
							to={{pathname:`${match.path}/2`,state}}>
							Chris
						</Link>
					</li>
					<li>
						<Link 
							to={{pathname:`${match.path}/3`,state}}>
							Michael
						</Link>
					</li>
					<li>
						<Link 
							to={{pathname:`${match.path}/4`,state}}>
							Ryan
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default BrowseUsersPage;