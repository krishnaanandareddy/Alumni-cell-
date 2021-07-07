import React,{useEffect, useState} from "react";
import { auth } from "./firebase";
import UserAuth from "./UserAuth";
import Home from "./Home";

function App() {
  const [presentUser , setPresentUser] = useState(null);
  useEffect(() =>{
    auth.onAuthStateChanged(user => {
      if(user){
      setPresentUser({
        user,
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      {presentUser ? <Home presentUser={presentUser}/> : <UserAuth />}
    </div>
  );
}

export default App;
