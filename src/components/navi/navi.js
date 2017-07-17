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
			<Navbar staticTop collapseOnSelect className="myNavBar">
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/" activeHref="active">
							<a>
								<Image src="https://www.sherpareport.com/images/hire-jet-plane.jpg" height={50}/>
							</a>	
						</LinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="About_me">
							<NavItem eventKey={1} >About me</NavItem>	
						</LinkContainer>	
						<LinkContainer to="Vlogs">
							<NavItem eventKey={2} >Vlogs</NavItem>	
						</LinkContainer>		
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			);

	}
}

export default Navi;
