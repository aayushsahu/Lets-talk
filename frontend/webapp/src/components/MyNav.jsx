import React from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const MyNav = ({user}) => {
    return (<Navbar expand="lg" className="bg-body-primary me-auto">
        <Container>
            <Navbar.Brand href='/home'>{user.toUpperCase()}</Navbar.Brand>
            <Navbar.Toggle href='#home'>Toggle</Navbar.Toggle>
            <Navbar.Collapse href='#home'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <NavDropdown title='nav-dropdown'>
                    <NavDropdown.Item href='1'>1</NavDropdown.Item>
                    <NavDropdown.Item href='2'>2</NavDropdown.Item>
                    <NavDropdown.Item href='3'>3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='logout'>Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
};

export default MyNav;