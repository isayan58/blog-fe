import React, { useContext, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import '../common/commonstyles/commonstyles.css';
import { CookieContext } from "../CookieContext";
// import { Button } from "@material-ui/core";

const HomePage =() =>
{
    const { cookie, SetCookie } = useContext(CookieContext);
    return(
    <div>
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