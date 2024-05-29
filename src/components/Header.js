import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="white" expand="lg" className="py-3">
            <Container>
                <h1>Bookstore</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="mx-2">Home    </Nav.Link>
                        <Nav.Link href="#about" className="mx-2">About</Nav.Link>
                        <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
