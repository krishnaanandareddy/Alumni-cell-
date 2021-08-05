import React, {useState} from 'react'
import { Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavBar from '../navbar/Navbar'

export default function Profile() {
    const [error, setError]=useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()  

    async function handleLogout(){
        setError('')
        try{
            await logout()
            history.pushState('/UserAuth')
        }catch{
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
        <p>name:{currentUser.displayName}</p>
        <Button variant="link" onClick={handleLogout}>
            Signout
        </Button>
        <Link to = "/UpdateProfile">Update</Link>
        
        </>
    )
}
