import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#templates">Cartoon Templates</Nav.Link>
                    <Nav.Link href="#gallery">User Gallery</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default MyNavbar;