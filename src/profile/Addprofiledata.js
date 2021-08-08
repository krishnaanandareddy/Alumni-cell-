import React from 'react'
import { Form } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import NavBar from '../navbar/Navbar'
import FloatingLabel from "react-bootstrap-floating-label";
import { Button } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router";

export default function Addprofiledata() {
    const [name1, setName1] = useState("")
    const [phonenumber1, setPhonenumber1] = useState("")
    const [course1, setCourse1] = useState("")
    const [department1, setDepartment1] = useState("")
    const [joiningyear1, setJoiningyear1] = useState("")
    const [adress1, setAdress1] = useState("")
    const [state1, setState1] = useState("")
    const [pincode1, setPincode1] = useState("")
    const [country1, setCountry1] = useState("")
    const [endingyear1, setEndingyear1] = useState("")
    const { currentUser } = useAuth()
    const history = useHistory()

    const skip = () =>{
        history.push("/Profile")
    }
    const handleupload = () => {

        db.collection("userinfo").doc(currentUser.email).set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            Adress: adress1,
            Course: course1,
            Department: department1,
            Name: name1,
            State: state1,
            country: country1,
            endingyear: endingyear1,
            joiningyear: joiningyear1,
            phonenumber: phonenumber1,
            pincode: pincode1,
            username: currentUser.email,
            boola: true,
            boolb: true
        }, (error) => {
            console.log(error)
        })
        history.push("/Profile")

        // setImage(null);
    }



    return (
        <div className="adddetailsbody">
            <NavBar />
            <div style={{ backgroundColor: "#EEEEEE" }}>
                <div>
                    <Form>
                        <Row className="detailsboxcontainer">
                            <div className="headingblockipropage">
                                <h3>Contact Information</h3>
                            </div>
                            <Col sm={6}>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                        className="mb-3"
                                        onChange={(e) => { setName1(e.target.value)}}
                                        required
                                    >
                                        <Form.Control
                                            value={name1}  required/>
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="phone number"
                                        className="mb-3"
                                        onChange={(e) => { setPhonenumber1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={phonenumber1} required />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Course/Degree"
                                        className="mb-3"
                                        onChange={(e) => { setCourse1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={course1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Division/Department"
                                        className="mb-3"
                                        onChange={(e) => { setDepartment1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={department1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Year of joining"
                                        className="mb-3"
                                        onChange={(e) => { setJoiningyear1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={joiningyear1} />
                                    </FloatingLabel>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Adress"
                                        className="mb-3"
                                        onChange={(e) => { setAdress1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={adress1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="State"
                                        className="mb-3"
                                        onChange={(e) => { setState1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={state1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="pincode"
                                        className="mb-3"
                                        onChange={(e) => { setPincode1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={pincode1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Country"
                                        className="mb-3"
                                        onChange={(e) => { setCountry1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={country1} />
                                    </FloatingLabel>
                                </div>
                                <div className="detailsbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Expected year of graduation"
                                        className="mb-3"
                                        onChange={(e) => { setEndingyear1(e.target.value) }}
                                    >
                                        <Form.Control
                                            value={endingyear1} />
                                    </FloatingLabel>
                                </div>
                            </Col>
                            <div className="add-prodata-submitbtn-container">
                                <Button type="submit" onClick={handleupload} variant="contained" color="primary" className="add-prodata-submitbtn">Submit</Button>
                            </div>
                            <div className="add-prodata-submitbtn-container">
                                <Button type="submit" onClick={skip} variant="contained" color="primary" className="add-prodata-submitbtn">if already submitted, skip</Button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}