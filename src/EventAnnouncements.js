import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import AnnouncementsList from './AnnouncementsList'
import './announcements.css'

const EventAnnouncements = () => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={3} className="text-center notifications-container">
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
                </Col>
                <Col xs={12} sm={9} className="announcement-container text-center" >
                {/* <Col xs={12} sm={{span: 8, offset: 1}} className="announcement-container text-center" > */}
                    <AnnouncementsList />
                    <AnnouncementsList />
                    <AnnouncementsList />
                </Col>
            </Row>
        </div>
    )
}

export default EventAnnouncements
