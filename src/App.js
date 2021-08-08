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
import Profiledata from "./profile/Profiledata";
import Addprofiledata from "./profile/Addprofiledata";
import Editprofiledata from "./profile/Editprofiledata";


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
          <PrivateRoute path="/Profile" exact component={Profiledata} />
          <PrivateRoute path="/Editprofiledata" exact component={Editprofiledata} />
          <Route path="/Addprofiledata" exact component={Addprofiledata} />
          <Route path="/UpdateProfile" exact component={UpdateProfile} />
          <Route path="/Chat" exact component={Chat} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
