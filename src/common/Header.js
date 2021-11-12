import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogContext } from "../BlogContext";
import './commonstyles/commonstyles.css';

const Header = () =>
{
    const { theme, setTheme } = useContext(BlogContext);
    const { font, setFont } = useContext(BlogContext);
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
            <Link to = "/login">
            <Button>
                Log In
            </Button>
            </Link>
            </div>
            <div className = "header-buttons">
            <Link to = "/sign-up">
            <Button className = "header-items">
                Sign Up
            </Button>
            </Link>
            <Button onClick={changetoDarkTheme}>Dark Theme</Button>
            <Button onClick={changetoLightTheme}>Light Theme</Button>
            </div>
        </div>
    );
}
export default Header;