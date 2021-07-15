import React from 'react'
// import { Row } from 'react-bootstrap'
import AnnouncementsList from './AnnouncementsList'

const EventAnnouncements = () => {
    return (
        <div className="AnnouncementsContainer">
            <div className="Row">
                <AnnouncementsList /><AnnouncementsList /><AnnouncementsList />
            </div>
        </div>
    )
}

export default EventAnnouncements
