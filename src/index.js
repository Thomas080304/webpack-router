import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Router,Switch, Route, Redirect } from 'react-router-dom';
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
import PrimaryLayout from './layouts/PrimaryLayout';
import AuthorizedRoute from './AuthorizedRoute';

render(
	(<BrowserRouter>
		<Switch>
			<Route 
				path="/auth" 
				component={UnauthorizedLayout} />
			 <AuthorizedRoute 
			 	path="/app" 
			 	component={PrimaryLayout} />
           	<Redirect to="/auth" />
		</Switch>
	 </BrowserRouter>), 
	document.getElementById('app')
)
