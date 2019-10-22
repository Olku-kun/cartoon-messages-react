import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar className = "myNavbar" bg="light" variant="light">


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/templates">Template Gallery</Nav.Link>
                        <Nav.Link href="#/gallery">User Gallery</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyNavbar;