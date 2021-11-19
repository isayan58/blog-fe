import { useNavigate } from "react-router";
import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import '../Blogpost/Blogpost.css';
import { CookieContext } from "../CookieContext";
import OAuth2Login from 'react-simple-oauth2-login';
import config from '../config/prod_config';


const Login = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { cookie, setCookie } = useContext(CookieContext);
    const handleLogin =()=>
    {
      const onLogin = async() =>
      {
        const apiResponse = await fetch(`${config.base_url}/authenticateUser`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
              email: email,
              password: password
            }
          )
        });
        const responseData = await apiResponse.json();
        console.log(responseData);
        Cookies.set("authToken", responseData.token);
        setCookie(responseData.token);
        navigate("/blogs");
      }
      onLogin();
    }

    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);
    return(<div className="blogpost-login">
        <Card className="container">
          <div className="space">
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
            {/* <Form.Check type="checkbox" label="Remember Me" /> */}
            <Link to="/update_password">
              Forgot Password.
            </Link>
          </Form.Group>
          <Button variant="primary" type="submit"
          onClick={handleLogin}>
            Login
          </Button>
          {/*<OAuth2Login
            authorizationUrl="https://accounts.gmail.com/authorize"
            responseType="token"
            clientId="9822046hvr4lnhi7g07grihpefahy5jb"
            redirectUri="http://localhost:3000/oauth-callback"
            onSuccess={onSuccess}
            onFailure={onFailure}/>*/}
          </div>
        </Card>
        </div>
    );
};
export default Login;