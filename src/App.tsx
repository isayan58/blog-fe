import React from 'react';
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

function App() {
  return(
  <>
    <div>
      <Header/>
      <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Bloggers/>} path="/bloggers"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/sign-up"/>
      <Route element={<Blogs/>} path="/blogs/:blogger_id"/>
      <Route element={<BlogContent/>} path="/blogs/:blogger_id/:title"/>
      </Routes>
    </div>
  </>);
}

export default App;
