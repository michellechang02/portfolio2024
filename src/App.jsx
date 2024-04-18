import { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from './components/AcmeLogo';
import Navbar2 from './components/Navbar2'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Navbar2/>
      <HomePage />
    </>
  )
}

export default App;
