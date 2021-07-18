import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth } from './firebase'
// import {BrowserRouter, Route, Switch } from 'react-router-dom';

// import { NavDropdown } from 'react-bootstrap'


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  className= "navbar-brand">Alumni Cell</Navbar.Brand>
                    <Navbar.Brand className= "navbar-brand"><Link to="/Home" style={{ textDecoration: 'none' }}><a className="link">Home</a></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className= "navbar-brand"><Link to="/EventAnnouncements" style={{ textDecoration: 'none' }}><a className="link">Announcements</a></Link></Nav.Link>
                            <Nav.Link className= "navbar-brand"><Link to="/EventAnnouncements" style={{ textDecoration: 'none' }} ><a className="link">Initiatives</a></Link></Nav.Link>
                            {/* <Nav.Link className= "navbar-brand link">Initiatives</Nav.Link> */}
                            {/* <NavDropdown className="link" title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => auth.signOut()}><a className="link">signout</a></Nav.Link>
                            <Nav.Link eventKey={2}><Link to="/UserAuth" style={{ textDecoration: 'none' }}>
                                <a className="link">Login/signup</a></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
