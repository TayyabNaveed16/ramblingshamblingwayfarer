import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TableDocument } from 'iconsax-react';
import logo from '../components/logo.png'
import FeatherLoop from '../components/FeatherLoop.png'



function NavigationBar() {

    const backgroundStyles = {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), transparent)',
        backgroundColor: 'white', // Change to white or any other color you prefer
    };

    return (
        <div style={backgroundStyles}>

            <Navbar expand="sm" className="bg-body-transparent sm:py-5">
                <Container>
                    <Navbar.Brand className="flex items-center sm:-ml-24">
                        <img src={FeatherLoop} alt="Logo" className="w-14 h-14 sm:mb-4  " />
                        <span className="text-sm sm:text-3xl">Rambling Shambling Wayfarer</span>
                    </Navbar.Brand>
                    <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-xl text-black sm:text-3xl sm:ml-48 hover:underline " href="#home">Poetry</Nav.Link>
                            <Nav.Link className="text-xl text-black sm:text-3xl sm:ml-10 hover:underline  " href="#link">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
