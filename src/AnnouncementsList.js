import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import img1 from "./Announcement1.jpg"
import "./Announcement.css"
import { Link } from 'react-router-dom'


const AnnouncementsList = () => {
    return (
        <div>
            <Card className="text-center" >
                <div className="text-center">
                <Link  to="/AnnouncementSummary"><img className="image" src={img1} /></Link>
                </div>
                <Card.Body>
                    <Card.Title><Link  to="/AnnouncementSummary" style={{ textDecoration: 'none' }}>Alumni meetup</Link></Card.Title>
                    <Card.Text>
                        Organised by Mr.XYZ 
                    </Card.Text>
                    <Card.Text>
                        Event timings Date:xyz at zyx
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default AnnouncementsList
