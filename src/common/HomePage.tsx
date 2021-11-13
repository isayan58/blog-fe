import React from "react";
import Home from "./Home";
import Login from "./Login";
import '../common/commonstyles/commonstyles.css';

const HomePage =() =>
{
    return(
    <div className = "homepage">
    <div className="home">
    <Home />
    </div>
    <Login />
    </div>
    )
}

export default HomePage;