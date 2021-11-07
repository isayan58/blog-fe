import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const Login = () =>{
    const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
    return(
        <Card className="container">
          <Card.Title>Login</Card.Title>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Card>
    );
};
export default Login;