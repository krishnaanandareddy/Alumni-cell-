import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const AnnouncementsList = () => {
    return (
        <div>
            <Card className="text-center" >
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Alumni meetup</Card.Title>
                    <Card.Text>
                        Organised by Mr.XYZ
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default AnnouncementsList
