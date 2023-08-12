import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaShoppingCart,FaUser} from "react-icons/fa"

const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">kls galaxy</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            <Nav.Link href='/cart'><FaShoppingCart/>cart</Nav.Link>
            <Nav.Link href='/login'><FaUser/>Sign in</Nav.Link>
            </Nav>


        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header