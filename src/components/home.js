import React, { Component } from 'react';
import Pictures from './pictures/pictures';
import slidingpics from './pictures/mypicsdata';



class Home extends Component{
	render(){
		return(
			<div>
			<p>
			welcome to testing
			</p>
			<Pictures mypicsdata={slidingpics}/>
			</div>
			);

	}
}

export default Home;
