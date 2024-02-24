import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { TableDocument } from "iconsax-react";
import FeatherLoop from "../components/images/FeatherLoop.png";

function NavigationBar() {
  const backgroundStyles = {
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent)",
  };

  return (
    <div style={backgroundStyles}>
      <Navbar expand="sm" style={{ position: 'relative', paddingBottom: '1rem' }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: '100%',
          backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.8), white)'
        }}></div>
        <Container>
          <Navbar.Brand className="flex items-center sm:-ml-24">
            <Nav.Link href="/" className="flex items-center hover:underline">
              <img src={FeatherLoop} alt="Logo" className="w-14 h-14 sm:mb-4" />
              <h1 className="text-sm sm:text-3xl">
                Rambling Shambling Wayfarer
              </h1>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="text-xl text-black sm:text-3xl sm:ml-12 hover:underline"
                href="/Poetry"
              >
                <h1>Poetry</h1>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
