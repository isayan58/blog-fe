import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogContext } from "../BlogContext";
import './commonstyles/commonstyles.css';

const Header = () =>
{
    const { theme, setTheme } = useContext(BlogContext);
    const { font, setFont } = useContext(BlogContext);
    const [cookie, setCookie] = useState("");
    const changetoDarkTheme =() =>
    {
        setTheme("#000000");
        setFont("#FFFFFF");
    }
    const changetoLightTheme =() =>
    {
        setTheme("#FFFFFF");
        setFont("#000000")
    }
    const handleLogout = () =>
    {
        Cookies.remove("authToken");
    }

    useEffect(()=>
    {
        setCookie(Cookies.get("authToken"));
        console.log(cookie);
    });

    return(
        <div className="header-tab">
            <Link to = "/" className = "header-items">
                Home
            </Link>
            <Link to = "/bloggers" className = "header-items">
                Bloggers
            </Link>
            <Link className = "header-items" to = "/contact">
                Contact
            </Link>
            <Link className = "header-items" to = "/write-a-blog">
                Write a Blog
            </Link>
            <div className = "header-buttons">
            {
                cookie ?
                <div></div>
                :
            <Link to = "/login">
            <Button>
                Log In
            </Button>
            </Link>
            }
            </div>
            <div className = "header-buttons">
            {
                cookie ?
            <Link to = "/sign-up">
            <Button className = "header-items"
            onClick={handleLogout}>
                Sign Up
            </Button>
            </Link>
            :
            <div></div>
}
            </div>
            <Button onClick={changetoDarkTheme}>Dark Theme</Button>
            <Button onClick={changetoLightTheme}>Light Theme</Button>
            
        </div>
    );
}
export default Header;