import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
const Mynav = () => {
    return (
        <Navbar bg="light" expand="lg">
         <Nav.Link href="#aboutme">about me</Nav.Link> 
         <Nav.Link href="#myportfolio">portfolio</Nav.Link> 
         <Nav.Link href="#contactme">contact</Nav.Link> 
        </Navbar>
    )
}

export default Mynav
