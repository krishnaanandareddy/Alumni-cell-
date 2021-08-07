import React, { useState } from 'react'
import { Button, Alert, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavBar from '../navbar/Navbar'
import Avatar from "@material-ui/core/Avatar";
import './profile.css'
import profilebg from "../images/profile baground image.jpg"
import { Row, Col } from 'react-bootstrap'
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


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
            {/* <h2>Profile</h2>
            <h5>
                Email:{currentUser.email}
                uid:{currentUser.uid}
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
            </Button> */}

            <div>
                <div className="profile-cover-image">
                    <img src={profilebg} className="profile-cover-image" />
                </div>
                <div className="pagestrip">
                    <Row className="propage">
                        <Col md={4}>
                            <div className="userinfonameandimage">
                                <div className="propicinprofilecontainer">
                                    <img src={currentUser.photoURL} className="propicinprofile"/>
                                </div>
                                <div>
                                    <div className="usernameinpropage">
                                        {currentUser.displayName}
                                    </div>
                                    <div className="studentdata">
                                        student data goes here
                                    </div>
                                </div>
                            </div>
                            <div className="userinfo">
                                <div className="headingblockipropage">
                                    <InfoIcon style={{marginRight:"12px"}}/>
                                    Contact Information
                                </div>
                            </div>
                            <div className="infobox">
                                <div className="infoline"> <ContactMailIcon style={{marginRight:"12px"}} />{currentUser.email} </div>
                                <div className="infoline"> <PhoneIcon style={{marginRight:"12px"}} />phone number comes here </div>
                                <div className="infoline"> <RoomIcon  style={{marginRight:"12px"}} />{currentUser.email} </div>
                            </div>
                        </Col>
                        <Col mg={8}>
                            <div>
                            <div className="userinfo">
                                <div className="headingblockipropage">
                                    <ImportContactsIcon style={{marginRight:"12px"}}/>
                                    Summary
                                </div>
                            </div>
                            <div className="infobox">
                                <div className="infoline"> <InfoIcon style={{marginRight:"12px"}} />Summary about user comes here</div>
                            </div>
                            </div>    

                            <div>
                            <div className="userinfo">
                                <div className="headingblockipropage">
                                    <ImportContactsIcon style={{marginRight:"12px"}}/>
                                    Education
                                </div>
                            </div>
                            <div className="infobox">
                                <div className="infoline"> <InfoIcon style={{marginRight:"12px"}} />User Education detailes comes here</div>
                            </div>
                            </div>   

                            <div>
                            <div className="userinfo">
                                <div className="headingblockipropage">
                                    <ImportContactsIcon style={{marginRight:"12px"}}/>
                                    Work Experiance
                                </div>
                            </div>
                            <div className="infobox">
                                <div className="infoline"> <InfoIcon style={{marginRight:"12px"}} />User Work Experiance comes here</div>
                            </div>
                            </div>                            
                        </Col>
                    </Row>
                </div>
            </div>

        </>

    )
}
