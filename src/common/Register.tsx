import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

const Register = () =>{
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    let [errFlag, setErrFlag] = useState(true);
    let [firstNameValid, setfirstNameValid] = React.useState("");
    let [lastNameValid, setLastNameValid] = React.useState("");
    let [phoneValid, setPhoneValid] = React.useState("");
    let [emailValid, setEmailValid] = useState("");
    let [passwordValid, setpasswordValid] = useState("");
    
    return(
        <div><Card className="container">
        <Card.Title>Register</Card.Title>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter First Name"
            onChange={(e) => {
              setFirstName(e.currentTarget.value);
            }}
          />
          {
           <div className="error">{firstNameValid}</div>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLastName(e.currentTarget.value);
            }}
          />
          {
           <div className="error">{lastNameValid}</div>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            onChange={(e) => {
              setPhoneNumber(e.currentTarget.value);
            }}
          />
          {
           <div className="error">{phoneValid}</div>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          {
            <div className="error">{emailValid}</div>
          }
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          {<div className="error">{passwordValid}</div>}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit"
        >
          Sign Up
        </Button>
      </Card></div>
    );
};
export default Register;