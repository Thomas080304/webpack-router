import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimaryHeader from '../ui/PrimaryHeader';
/*import AppHomePage from '../pages/AppHomePage';
import UserSubLayout from './UserSubLayout';
import ProductSubLayout from './ProductSubLayout';*/
import Loadable from 'react-loadable';

class PrimaryLayout extends React.Component{

	constructor(props){
		super(props);
		this.getRouters = this.getRouters.bind(this);
	}

	render(){
		const {match} = this.props;
		return (
			<div className="primary-layout">
				<PrimaryHeader />
				<div className="primary-content">
					<Switch>
						{this.getRouters()}
						<Redirect key="back" to={`${match.url}`} />
				    </Switch>
			    </div>
			</div>
		);
	}

	getRouters(){
		const {match} = this.props;
		const MyLoadingComponent = ({ isLoading, error }) => {
		    if (isLoading) {
		        return <div>Loading...</div>;
		    }else if (error) {
		        return <div>Sorry, there was a problem loading the page.</div>;
		    }else {
		        return null;
		    }
		};
		const cfgs = [
			{
				key:'AppHomePage',
				path:`${match.path}`,
				exact:true,
				component:Loadable({
					loader:()=>import('../pages/AppHomePage'),
					loading:MyLoadingComponent
				})
			},
			{
				key:'UserSubLayout',
				path:`${match.path}/users`,
				component:Loadable({
					loader:()=>import('./UserSubLayout'),
					loading:MyLoadingComponent
				})
			},
			{
				key:'ProductSubLayout',
				path:`${match.path}/products`,
				component:Loadable({
					loader:()=>import('./ProductSubLayout'),
					loading:MyLoadingComponent
				})
			}
		];
		const routers = [];
		for(let i = 0; i < cfgs.length; i++){
			const {path,component:Component,exact,key} = cfgs[i];
			const r = <Route 
				key={key}
				path={path} 
				component={Component} 
				exact={exact} />;
			routers.push(r);
		}
		return routers;
	}
}

export default PrimaryLayout;