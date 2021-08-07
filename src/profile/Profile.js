import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavBar from '../navbar/Navbar'
import Avatar from "@material-ui/core/Avatar";

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/UserAuth')
        } catch {
            setError('Failed to signout')
        }
    }
    return (
        <>
            <NavBar />
            <h2>Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <h5>
                Email:{currentUser.email}
            </h5>
            <img src={currentUser.photoURL} />
            {
                !!currentUser.photoURL ? (
                    <>
                    </>
                ) : (
                    <>
                        <Avatar
                            alt={currentUser.email.toLowerCase()}
                            style={{ height: "25px", width: "25px" }}
                        >
                            {currentUser.email.charAt(0)}
                        </Avatar>
                    </>
                )
            }
            <p>name:{currentUser.displayName}</p>
            <Button variant="link" onClick={handleLogout}>
                Signout
            </Button>
            <Link to="/UpdateProfile">Update</Link>
            <Button variant="link">
                <Link to="/EventAnnouncements">Create Post</Link>
            </Button>

        </>
    )
}
