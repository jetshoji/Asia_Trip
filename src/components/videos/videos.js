import React, { Component } from 'react';
import videovlogs from './videodata';
import Videodetails from './videodetails';




class Videos extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const vids=videovlogs.map( (viddata, index)=>{
			return(
				<Videodetails viddetail={viddata} key={index}>

				</Videodetails>
				);
		} );
		return(
			<div>
				<h1>
				V-LOGS
				</h1>
				<div>
					{vids}
				</div>
			</div>
			);
	}
}

export default Videos;