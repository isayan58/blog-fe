import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import '../common/commonstyles/commonstyles.css';
import { CookieContext } from "../CookieContext";

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