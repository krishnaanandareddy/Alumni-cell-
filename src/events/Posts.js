import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import NavBar from '../navbar/Navbar'
import CreatePost from './CreatePost'
import { useAuth } from '../contexts/AuthContext'
import "./Posts.css"

const Posts = () => {
    const { currentUser, logout } = useAuth()
    return (
        <div style={{backgroundColor:"#EEEEEE"}}>
            <NavBar />
            <Row>
                {/* <Col xs={12} sm={3} className="text-center notifications-container">
                    <Card.Body>
                    <Card.Title><h4>Event Categories</h4></Card.Title><br />
                    <Card.Text className="text">
                        <h5>Upcoming</h5>
                    </Card.Text>
                    <Card.Text className="text">
                        <h5>Past</h5>
                    </Card.Text>
                    <Card.Text className="text">
                        <h5>All Events</h5>
                    </Card.Text>
                    
                </Card.Body>
                </Col> */}
                {/* <Col xs={12} sm={9} className="announcement-container text-center" > */}
                <div className="text-center">
                    {!!currentUser ? (
                        <>
                            <div>
                                <CreatePost />
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
                {/* </Col> */}
            </Row>
        </div>
    )
}

export default Posts
