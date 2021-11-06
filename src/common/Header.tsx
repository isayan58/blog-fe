import React from "react";
import { Link } from "react-router-dom";

const Header = () =>
{
    return(
        <div className="">
            <Link to = "/">
                Home
            </Link>
            <Link to = "/bloggers">
                Bloggers
            </Link>
            <Link to = "/contact">
                Contact
            </Link>
            <Link to = "/login">
                Log In
            </Link>
            <Link to = "/sign-up">
                Sign Up
            </Link>
        </div>
    );
}
export default Header;