import React, { useState } from 'react'
import { Col, Container, Button, Row, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import logo from './logo.png';
import './login.css';
import { auth } from './firebase';
import db from './firebase';


const UserAuth = () => {
    const [data, setData] = useState({
        email: "",
        password: ""

    })
    const { email, password } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const Signup = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(user => console.log(user)).catch(err => console.log(err))
    }
    const Login = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(user => console.log(user)).catch(err => console.log(err))
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={3} sm={12}></Col>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 ">
                        <img src={logo} alt="icon" className="icon" />
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control  type="email" name="email" placeholder="Enter email"  value={email} onChange={changeHandler} /><br />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control  type="password" name="password" placeholder="Password" value={password}  onChange={changeHandler} /><br />
                            </Form.Group>
                            <Form.Group>
                                <Button onClick={Login} className="primary btn-block btn1" type="submit">
                                    Login
                                </Button><br /><br />
                            </Form.Group>
                            <p>Dont have an account? <a onClick={Signup} href="#">Signup here</a></p>

                        </Form>
                    </Col>
                    <Col lg={4} md={3} sm={12}></Col>

                </Row>
            </Container>
        </>
    )
}

export default UserAuth
