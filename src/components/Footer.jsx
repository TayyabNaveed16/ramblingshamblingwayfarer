import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Instagram } from 'iconsax-react';
import logo from '../components/logo.png';
import FeatherLoop from '../components/FeatherLoop.png';

function Footer() {
    const backgroundStyles = {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), transparent)',
        backgroundColor: 'white', // Change to white or any other color you prefer
    };

    return (
        <div style={backgroundStyles} className="py-5">
            <Navbar className="bg-body-transparent">
                <Container>
                    <Navbar.Brand className="flex items-center">
                        <img src={FeatherLoop} alt="Logo" className="w-8 h-8 sm:w-14 sm:h-14 sm:mb-4" />
                        <span className="text-xs text-white ml-2 sm:text-2xl ">Rambling Shambling Wayfarer</span>
                    </Navbar.Brand>

                    <Navbar.Brand className="flex items-center">
                        <Nav.Link className="flex text-xs text-white ml-2 sm:text-2xl" href="https://www.instagram.com/ramblingshamblingwayfarer/">
                            <Instagram className='w-5 h-5  mr-1 sm:mr-2 sm:w-10 sm:h-10'  color="#C13584" />
                            Instagram
                        </Nav.Link>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;
