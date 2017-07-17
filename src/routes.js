import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AboutMe from './components/about_me/about_me';
import Home from './components/home';
import App from './components/app';


export default (
	<Route path="/" component={App}> 
		<IndexRoute component={Home}/>
		<Route path="about_me" component={AboutMe}/>
		<Route path="about_me2" component={AboutMe}/>
	</Route>


	)
