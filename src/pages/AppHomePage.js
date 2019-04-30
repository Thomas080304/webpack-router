import React from 'react';
import history from 'history';

class AppHomePage extends React.Component{

	constructor(props){
		super(props);
		this.onBtnClick = this.onBtnClick.bind(this);
	}

	onBtnClick(){
		const {history,location} = this.props;
		history.push('/',{logined:true});
	}

	render(){

		return (
			<div>
				App Home Page
				<button 
					onClick={this.onBtnClick}>
					Logout
				</button>
			</div>
		);
	}
}

export default AppHomePage;