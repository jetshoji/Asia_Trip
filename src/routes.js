import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AboutMe from './components/About_me/aboutMe';
import Home from './components/Home';
import App from './components/app';
import Vlogs from './components/Vlogs/vlogs'


export default (
	<Route path="/" component={App}> 
		<IndexRoute component={Home}/>
		<Route path= "about_me" component={AboutMe}/>
		<Route path= "vlogs" component={Vlogs}/>
	
		



	</Route>


	)
