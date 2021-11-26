import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import config from '../config/prod_config';

const Update = () =>
{
    const [email, setEmail] = useState("");
    const [updatepwd2, setUpdatePwd2] = useState("");
    const navigate = useNavigate();
    const handleUpdate = () =>
    {
      const updatePwd = async()=>
      {
        const apiResponse = await fetch(`${config.base_url}/updatePassword`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
              email: email,
              password: updatepwd2
            }
          )
        });
        const responseData = await apiResponse.json();
        //Something to do if required
        navigate("/"); //Page not getting redirected. Need to check.
      }
      updatePwd();
    }
    return(
        <div className="password-container">
            <div className="">
            <Card className="container">
          <Card.Title>Update Password</Card.Title>
          <Form>
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
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setUpdatePwd2(e.currentTarget.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit"
          onClick={handleUpdate}>
            Update Password
          </Button>
          </Form>
        </Card>
            </div>
        </div>
    )
}
export default Update;