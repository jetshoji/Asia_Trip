import React, { Component } from 'react';
import {Carousel, Item, Caption, Image} from 'react-bootstrap';

class Pictures extends Component{
	
	constructor(props){
		super(props);
	};

	render(){

		const picture_items=this.props.mypicsdata.map( (pic, index)=>{
			return(
				<Carousel.Item key={index}>
					<Image src={pic.img}/>

				</Carousel.Item>

				)
		}

			);

		return(
			<div className="jumbotron">
				<Carousel interval={1000}>
					{picture_items}
				</Carousel>
			</div>


			);
	}

}

export default Pictures;