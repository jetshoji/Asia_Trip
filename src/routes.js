import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import AboutMe from './components/about_me/about_me';
import Videos from './components/videos/videos';




export default (
	<Route path="/" component={App}> 
		<IndexRoute component={Home}/>
		<Route path="about_me" component={AboutMe}/>
		<Route path="v_logs" component={Videos}/>
	</Route>


	)
