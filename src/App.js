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
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
