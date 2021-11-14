import React, { useContext, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import '../common/commonstyles/commonstyles.css';
import { CookieContext } from "../CookieContext";
// import { Button } from "@material-ui/core";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const HomePage =() =>
{
    const { cookie, SetCookie } = useContext(CookieContext);
    const [search , setSearch] = useState("");
    return(
    <div>
    <div className="searchbar">
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter blog name"
      aria-label="Enter blog name"
      aria-describedby="basic-addon2"
      onChange={(e) => setSearch(e.currentTarget.value)}
    />
    <Button variant="outline-secondary" id="button-addon2">
      Search Blogs
    </Button>
  </InputGroup>
  </div>
        {
            cookie ?
            <Home />
            :
            <div className = "homepage">
                <div className="home">
    <Home />
    </div>
    <Login />
            </div>

        }
    </div>
    )
}

export default HomePage;