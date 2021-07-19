import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import img1 from "./Announcement1.jpg"

const AnnouncementSummary = () => {
    return (
        <div className="justify-content-center align-items-center">{
            <Card className="text-center" >
            <div className="text-center">
                <img className="image" src={img1}/>
            </div>
            <Card.Body>
                <Card.Title>Alumni meetup</Card.Title>
                <Card.Text>
                    Organised by Mr.XYZ
                </Card.Text>
                <Card.Text>
                    Event timings Date:xyz at zyx
                </Card.Text>
                
            </Card.Body>
        </Card>
        }
            
        </div>
    )
}

export default AnnouncementSummary
