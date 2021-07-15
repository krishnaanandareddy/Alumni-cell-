import React, { useState } from 'react'
import { Col, Container, Button, Row, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import logo from './logo.png';
import './login.css';
import { auth } from './firebase';
import firebase from 'firebase';
// import { StyledFirebaseAuth } from 'react-firebaseui';
// import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SignupPage from './SignupPage';
// import db from './firebase';
// import NavBar from './Navbar';


const UserAuth = () => {
    const [data, setData] = useState({
        email: "",
        password: ""

    })
    const { email, password } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const Signup = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(user => console.log(user)).catch(err => console.log(err))
    }
    const Login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(user => console.log(user)).catch(err => console.log(err))
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });







    return (
        <>

            {/* <BrowserRouter>
                <Switch>
                    <Route path="/SignupPage" exact component={SignupPage} />
                </Switch>
            </BrowserRouter> */}


            <Container className="d-flex align-items-center justify-content-center con " >
                <Container className="mt-5">
                    <Row>
                        <Col className="text-center">
                            <img src={logo} alt="icon" className="icon" />
                            <h2>Alumni cell Login page</h2><br />
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={changeHandler} /><br />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={changeHandler} /><br />
                                </Form.Group>
                                <Form.Group>
                                    <Button onClick={Login} className="primary btn-block btn1" type="submit">
                                        Login
                                    </Button><br /><br />
                                    <p>
                                        Or
                                    </p>
                                    <Button onClick={provider} className="primary btn-block btn1" type="submit">
                                        Signin with google
                                    </Button>
                                    <br /><br />
                                </Form.Group>
                                <p>Dont have an account? <a onClick={Signup} href="#" >Signup here</a></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default UserAuth
