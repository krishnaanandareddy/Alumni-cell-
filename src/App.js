import React, { useEffect, useState } from "react";
import UserAuth from "./auth/UserAuth";
import NavBar from "./navbar/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './auth/SignupPage'
import Postspage from './events/Postspage';
import Home from './home/Home'
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./profile/Profile";
import UpdateProfile from "./profile/UpdateProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import forgotPassword from "./auth/forgotPassword";
import Chat from "./chat/Chat";
import UpcomingEvents from "./upcoming events/EventsAhead";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/Posts" exact component={Postspage} />
          <Route path="/UserAuth" exact component={UserAuth} />
          <Route path="/SignupPage" exact component={SignupPage} />
          <Route path="/forgotPassword" exact component={forgotPassword} />
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/Profile" exact component={Profile} />
          <Route path="/UpdateProfile" exact component={UpdateProfile} />
          <Route path="/Chat" exact component={Chat} />
          <Route path="/UpcomingEvents" exact component={UpcomingEvents}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
