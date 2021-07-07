import React from 'react'
import { auth } from './firebase'

const Home = (presentUser) => {
    return (
        <div>
            <center>
                <h3>welcome {presentUser.email}</h3>
                <button onClick={() => auth.signOut()}>signout</button>
            </center>
        </div>
    )
}

export default Home
