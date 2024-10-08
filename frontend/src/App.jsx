import { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Fun from './components/Fun.jsx'
import Blog from './components/Blog.jsx'

function App() {
  return (
    <>
     {/* <main className="dark text-foreground bg-background"> */}
      <Navbar2/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/fun" element={<Fun/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
      {/* </main> */}
    </>
  )
}

export default App;
