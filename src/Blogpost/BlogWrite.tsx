import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

const BlogWrite =() =>
{
    const [author, setAuthor] = useState(4);
    const [blogtitle, setBlogTitle] = useState("");
    const [blogcontent, setBlogContent] = useState("");
    const [tag, setTag]=useState("");
    const [tags, setTags]=useState([""]);

    const handleClick =() => {
        console.log(tags);
    }

    return(
        <div>
            <Card className="container">
      <Card.Title>Write your blog here</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Blog Title"
          onClick={(e) => {
            setBlogTitle(e.currentTarget.value);
          }}
        />
        {
         <div className="error">{}</div>
        }
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
      onChange = {(e)=>
    {
        setTag(e.currentTarget.value);
    }}
    />
    <Button variant="outline-secondary"
    onClick = {()=>
    {
        setTags([...tags, tag]);
    }}>Button</Button>
  </InputGroup>
      <Button onClick={handleClick}>Post the blog</Button>
      </Card>
        </div>
    )
}

export default BlogWrite;