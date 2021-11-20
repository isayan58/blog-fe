import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useNavigate } from "react-router";
import { CookieContext } from "../CookieContext";
import './Blogpost.css';
import config from '../config/prod_config';

const BlogWrite =() =>
{
    const [author, setAuthor] = useState(5);
    const [blogtitle, setBlogTitle] = useState("");
    const [image, setImage] = useState("");
    const [blogcontent, setBlogContent] = useState("");
    const [tag, setTag]=useState("");
    const [tags, setTags]=useState(["Blogs"]);
    const blogContentEl = useRef(null);
    const navigate = useNavigate();
    const { cookie, setCookie } = useContext(CookieContext);

    const handleClick = async() => {
        try{
          
            const apiResponse = await fetch(`${config.base_url}/postBlog`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: blogtitle,
                  header_image: image,
                  content: blogcontent,
                  tags: tags,
                  date_posted: Date.now(),
                  authToken: cookie
                }),
            });
            navigate("/blogs");
        }
        catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="blogpost">
            <Card className="container">
      <Card.Title>Write your blog here</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Blog Title"
          onChange={(e) => {
            setBlogTitle(e.currentTarget.value);
          }}
        />
        {
         <div className="error">{}</div>
        }
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Header image address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter header image address"
          onChange={(e) => {
            setImage(e.currentTarget.value);
          }}
        />
        {
         <div className="error">{}</div>
        }
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
          as="textarea"
          rows={15}
          placeholder="Enter Blog Content here"
          onChange={(e) =>
        {
            setBlogContent(e.currentTarget.value);
        }}
        />
      </Form.Group>
      <InputGroup>
    <FormControl
      placeholder="Add tags for blog"
      aria-label="Recipient's username with two button addons"
      ref = {blogContentEl}
      onChange = {(e)=>
    {
        setTag(e.currentTarget.value);
    }}
    />
    <Button variant="outline-secondary"
    onClick = {()=>
    {
        setTags([...tags, tag]);
        setTag("");
        blogContentEl.current.value="";
    }}>Add Tag</Button>
  </InputGroup>
      <Button onClick={handleClick}>Post the blog</Button>
      </Card>
        </div>
    )
}

export default BlogWrite;