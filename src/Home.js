import React from 'react'
import { auth } from './firebase'
import NavBar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventAnnouncements from './EventAnnouncements';
import Home1 from './Home1';


const Home = (User) => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path = "/EventAnnouncements" exact component = {EventAnnouncements} />
                    <Route path = "/Home" exact component = {Home1} />
                </Switch>
            </BrowserRouter>

            <div>
                <center>
                    <h3>{User.email}</h3>
                    <button onClick={() => auth.signOut()}>signout</button>
                </center>
            </div>
        </>
    )
}

export default Home
