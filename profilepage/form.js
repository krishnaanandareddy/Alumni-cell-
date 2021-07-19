import { left } from "@popperjs/core";
import React from "react";
import { Formik } from "formik";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormLabel";
import "./styles.css";
import Row from "react-bootstrap/Row";

const Form = () => (
  <Formik>
    <center>
      <FormGroup>
        <Row>
          <FormLabel className="subhd" style={{ textAlign: left }}>
            NAME:
          </FormLabel>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="inputbox"
            />
          </div>
        </Row>
        <br />
        <Row>
          {" "}
          <FormLabel className="subhd" style={{ textAlign: left }}>
            EMAIL ID:
          </FormLabel>
          <div>
            <input
              type="text"
              placeholder="Enter your Email Id"
              className="inputbox"
            />
          </div>
        </Row>
        <br />
        <Row>
          {" "}
          <FormLabel className="subhd" style={{ textAlign: left }}>
            CONTACT NUMBER:
          </FormLabel>
          <div>
            <input
              type="text"
              placeholder="Enter your conatct number"
              className="inputbox"
            />
          </div>
        </Row>
        <br />
        <Row>
          {" "}
          <FormLabel className="subhd" style={{ textAlign: left }}>
            PLACE:
          </FormLabel>
          <div>
            <input
              type="text"
              placeholder="Enter your present city name."
              className="inputbox"
            />
          </div>
        </Row>
      </FormGroup>
    </center>
  </Formik>
);

export default Form;
