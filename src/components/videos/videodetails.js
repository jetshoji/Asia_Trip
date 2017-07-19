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
		var embedstyle= { position:'relative',
						  height:0,
						  overflow:'hidden',
						  maxWidth:'100%',
						  paddingBottom:'56.25%'
						};
		var framestyle= { position:'absolute',top:0,left:0,width:'100%',height:'100%'
						};
		return(
			<div>
				<Button onClick={()=> this.setState({open: !this.state.open})}>
					{this.props.viddetail.key}
				</Button>
				<Panel collapsible expanded={this.state.open}>
					<div style={embedstyle}>
					<iframe src={this.props.viddetail.video} 
   					 style={framestyle}
   					 allowFullScreen>
    				
    				 </iframe>
  					</div>

						<p>
						{this.props.viddetail.desc}
					</p>
				</Panel>


			</div>


			);
	}
}
export default Videodetails;