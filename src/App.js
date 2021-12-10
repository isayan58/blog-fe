import React, { createContext, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import './App.css';
import HomePage from './common/HomePage';
import Bloggers from './common/Bloggers';
import Contact from './common/Contact';
import Login from './common/Login';
import Home from './common/Home';
import Register from './common/Register';
import Blogs from './authorBlogs/Blogs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BlogContent from './authorBlogs/BlogContent';
import BlogWrite from './Blogpost/BlogWrite';
import { BlogContext } from './BlogContext';
import {  CookieContext } from './CookieContext';
import { SearchContext } from './SearchContext';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import BlogSearch from './Blogpost/BlogSearch';
import Update from './common/Update';

function App() {
  const [ theme, setTheme ] = useState("#000000");
  const [ font, setFont ] = useState("#FFFFFF");
  // const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  const [cookie, setCookie] = useState("");
  const [search , setSearch] = useState("");
  const navigate = useNavigate();
    const onSearch = () =>
    {
      //navigate(`search/${search}`);
      alert("Advanced search functionality in development. Disabled functionality till then");
    }
  return(
  <>
    <div style={{ background: theme, color: font }}>
    <BlogContext.Provider value= {{ theme, setTheme, font, setFont }}>
    <CookieContext.Provider value ={{cookie, setCookie}}>
    <SearchContext.Provider value ={{search, setSearch}}>
    <Header/>
    <div className="searchbar">
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter blog name"
      aria-label="Enter blog name"
      aria-describedby="basic-addon2"
      onChange={(e) => setSearch(e.currentTarget.value)}
    />
    <Button variant="outline-secondary" id="button-addon2"
    onClick = {onSearch}>
      Search Blogs
    </Button>
  </InputGroup>
  </div>
      <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<Bloggers/>} path="/bloggers"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/sign-up"/>
      <Route element={<Blogs/>} path="/blogs/:blogger_id"/>
      <Route element={<BlogContent/>} path="/blogs/:blogger_id/:title"/>
      <Route element={<BlogWrite/>} path="/write-a-blog" />
      <Route element={<Home/>} path="/blogs"/>
      <Route element={<BlogSearch/>} path="/search/:search"/>
      <Route element={<Update/>} path="/update_password" exact/>
      </Routes>
      </SearchContext.Provider>
      </CookieContext.Provider>
      </BlogContext.Provider>
    </div>
  </>);
}

export default App;
