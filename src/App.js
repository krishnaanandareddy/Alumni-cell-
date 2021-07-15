import React,{useEffect, useState} from "react";
import { auth } from "./firebase";
import UserAuth from "./UserAuth";
import Home from "./Home";
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [User , setUser] = useState(null);
  useEffect(() =>{
    auth.onAuthStateChanged(user => {
      if(user){
      setUser({
        user,
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setUser(null);
    }
    })
  },[])
  return (
    <div>
      {User ? <Home User={User}/> : <UserAuth />}
    </div>
  );
}

export default App;
