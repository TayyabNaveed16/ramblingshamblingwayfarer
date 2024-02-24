import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Instagram } from 'iconsax-react';
import FeatherLoop from '../components/images/FeatherLoop.png';

function Footer() {
    const backgroundStyles = {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
        backgroundColor: 'white', 
    };

    return (
        <div style={backgroundStyles} className="py-5">
            <Navbar className="bg-body-transparent">
                <Container>
                    <Navbar.Brand className="flex items-center">
                        <Nav.Link href="/" className="flex items-center hover:underline decoration-white">
                            <img src={FeatherLoop} alt="Logo" className="w-8 h-8 sm:w-14 sm:h-14 sm:mb-4" />
                            <h1 className="text-xs text-white ml-2 sm:text-2xl ">Rambling Shambling Wayfarer</h1>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Brand className="flex items-center">
                        <Nav.Link className="flex text-xs text-white ml-2 sm:text-2xl hover:underline decoration-white" href="https://www.instagram.com/ramblingshamblingwayfarer/">
                            <Instagram className='w-5 h-5  mr-1 sm:mr-2 sm:w-10 sm:h-10' color="#C13584" />
                            <h1>
                                Instagram
                            </h1>
                        </Nav.Link>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;
