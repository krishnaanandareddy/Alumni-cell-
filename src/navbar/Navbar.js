import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import "./navbar.css"
import Avatar from "@material-ui/core/Avatar";


const NavBar = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/Home')
        } catch {
            setError('Failed to signout')
        }
    }
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand className="navbar-brand"><Link to="/" style={{ textDecoration: 'none' }}><a className="link">Alumni Cell</a></Link></Navbar.Brand>
                    {/* <Navbar.Brand className="navbar-brand"><Link to="/" style={{ textDecoration: 'none' }}><a className="link">Home</a></Link></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navbar-brand"><Link to="/" style={{ textDecoration: 'none' }}><a className="link">Home</a></Link></Nav.Link>
                            <Nav.Link className="navbar-brand"><Link to="/Posts" style={{ textDecoration: 'none' }}><a className="link">Posts</a></Link></Nav.Link>
                            <Nav.Link className="navbar-brand"><Link to="/Posts" style={{ textDecoration: 'none' }} ><a className="link">Initiatives</a></Link></Nav.Link>
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

                            {!!currentUser ? (
                                <>
                                    {/* <p>{`Welcome, ${currentUser.displayName}`}</p> */}
                                    <Nav.Link eventKey={2}><Link to="/Profile" style={{ textDecoration: 'none' }}>
                                        <a className="link">Profile</a></Link>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2}><Link to="/Chat" style={{ textDecoration: 'none' }}>
                                        <a className="link">Chat</a></Link>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2}>
                                        <a style={{ textDecoration: 'none' }} className="link" onClick={handleLogout}>logout</a>
                                    </Nav.Link>
                                    {/* <Nav.Link > */}
                                    {
                                        !!currentUser.photoURL ? (
                                            <>
                                            <img src={currentUser.photoURL} className="navbar_img" />
                                            </>
                                        ) : (
                                            <>
                                                <Avatar
                                                    alt={currentUser.email.toLowerCase()}
                                                    className="navbar_img"
                                                >
                                                    {currentUser.email.charAt(0)}
                                                </Avatar>
                                            </>
                                        )
                                    }
                                    {/* </Nav.Link> */}
                                </>
                            ) : (
                                <>
                                    <Nav.Link eventKey={2}><Link to="/UserAuth" style={{ textDecoration: 'none' }}>
                                        <a className="link" >Login/signup</a></Link>
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar
