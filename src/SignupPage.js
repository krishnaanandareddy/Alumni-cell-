import React, { useState, useEffect } from 'react'
import { Col, Container, Button, Row, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import logo from './logo.png';
import './login.css';
import { auth } from './firebase';
import firebase from 'firebase';



const SignupPage = () => {
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



    return (
        <>
            <Container className="d-flex align-items-center justify-content-center con " >
                <Container className="mt-5">
                    <Row>
                        <Col className="text-center">
                            <img src={logo} alt="icon" className="iconoflogin" />
                            <h2>Alumni cell Sign page</h2><br />
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={changeHandler} /><br />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" name="password" placeholder="Choose Password" value={password} onChange={changeHandler} /><br />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="text" name="FirstName" placeholder="FirstName" /><br />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="text" name="SecondName" placeholder="SecondName" /><br />
                                </Form.Group>
                                <Form.Group>
                                    <Button onClick={Signup} className="primary btn-block btn1" type="submit">
                                        Signup
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SignupPage
