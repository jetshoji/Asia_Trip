import React, { Component } from 'react';
import {Button, Panel, Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Videodetails extends Component{
	constructor(props){
		super(props);
		this.state={
			open: false
		}
	}

	render(){
		console.log("hello from Videodetails");
		console.log(this.props);
		return(
			<div>
				<Button onClick={()=> this.setState({open: !this.state.open})}>
					{this.props.viddetail.key}
				</Button>
				<Panel collapsible expanded={this.state.open}>

					<ReactPlayer url={this.props.viddetail.video} controls='true'/>
					<p>
						{this.props.viddetail.desc}
					</p>
				</Panel>


			</div>


			);
	}
}
export default Videodetails;