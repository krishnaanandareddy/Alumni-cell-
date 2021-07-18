import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import UserAuth from "./UserAuth";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnouncementSummary from './AnnouncementSummary'
import SignupPage from './SignupPage'
import EventAnnouncements from './EventAnnouncements';
import Home from './Home'

function App() {
  const [User, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          user,
          uid: user.uid,
          email: user.email
        })
      }
      else {
        setUser(null);
      }
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/EventAnnouncements" exact component={EventAnnouncements} />
          <Route path="/UserAuth" exact component={UserAuth} />
          <Route path="/SignupPage" exact component={SignupPage} />
          <Route path="/" exact component={Home} />
          <Route path="/AnnouncementSummary" exact component={AnnouncementSummary} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
