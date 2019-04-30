import React from 'react';

class LoginPage extends React.Component{

	constructor(props){
		super(props);
		this.onBtnClick = this.onBtnClick.bind(this);
	}
	
	onBtnClick(){
		const {history,location} = this.props;
		history.push('/app',{logined:true});
		/*history.push({
			pathname:'/app',
			query:{logined:true}
		});*/
	}

	render(){

		return (
			<div>
				<h1>Login Page</h1>
				<p>
					This example compliments
					the CSS-Tricks article I wrote for <a target="_blank" href="https://css-tricks.com/react-router-4/">React Router 4</a>.
				</p>
				<button 
					onClick={this.onBtnClick}>
					Login
				</button>
			</div>
		);
	}
}

export default LoginPage;