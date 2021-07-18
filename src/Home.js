import React from 'react'
import { auth } from './firebase'
import NavBar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventAnnouncements from './EventAnnouncements';
import Home1 from './Home1';
import UserAuth from './UserAuth';
import AnnouncementSummary from './AnnouncementSummary'
import SignupPage from './SignupPage'
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';


const Home = (User) => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/EventAnnouncements" exact component={EventAnnouncements} />
                    <Route path="/UserAuth" exact component={UserAuth} />
                    <Route path="/SignupPage" exact component={SignupPage} />
                    <Route path="/Home" exact component={Home1} />
                    <Route path="/AnnouncementSummary" exact component={AnnouncementSummary} />
                </Switch>
            </BrowserRouter>
            




            <Footer />

        </>
    )
}

export default Home
