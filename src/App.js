import React, { createContext, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import './App.css';
import Home from './common/Home';
import Bloggers from './common/Bloggers';
import Contact from './common/Contact';
import Login from './common/Login';
import Register from './common/Register';
import Blogs from './authorBlogs/Blogs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BlogContent from './authorBlogs/BlogContent';
import BlogWrite from './Blogpost/BlogWrite';
import { BlogContext } from './BlogContext';
import {  CookieContext } from './CookieContext';

function App() {
  const [ theme, setTheme ] = useState("#000000");
  const [ font, setFont ] = useState("#FFFFFF");
  // const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  const [cookie, setCookie] = useState("");
  return(
  <>
    <div style={{ background: theme, color: font }}>
      <BlogContext.Provider value= {{ theme, setTheme, font, setFont }}>
      <CookieContext.Provider value ={{cookie, setCookie}}>
      <Header/>
      <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Bloggers/>} path="/bloggers"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/sign-up"/>
      <Route element={<Blogs/>} path="/blogs/:blogger_id"/>
      <Route element={<BlogContent/>} path="/blogs/:blogger_id/:title"/>
      <Route element={<BlogWrite/>} path="/write-a-blog" />
      </Routes>
      </CookieContext.Provider>
      </BlogContext.Provider>
    </div>
  </>);
}

export default App;
