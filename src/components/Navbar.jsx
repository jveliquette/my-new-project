import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Assets/jv-logo.png'

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} className="p-2" />Julia Veliquette</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;
