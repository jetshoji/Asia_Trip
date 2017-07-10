import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	Header,
	Brand,
	Collapse,
	Image,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {SocialIcon} from 'react-social-icons';


class Navi extends Component{
	render(){
		return(
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href ="#">React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">Link</NavItem>
					<NavItem eventKey={2} href="#">Link</NavItem>				
				</Nav>
			</Navbar>

			);

	}
}

export default Navi;
