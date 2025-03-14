import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import Footer from './Footer'

import '../App.css'
import '../assets/layouts/Nav.css';
import '../assets/layouts/Hero.css';
import '../assets/layouts/Specials.css';
import '../assets/layouts/CustomersSay.css';
import '../assets/layouts/Chicago.css';
import '../assets/layouts/Footer.css';

const HomePage = () => {
  return (
    <>
    <Nav />
    <Hero />
    <Specials />
    <CustomersSay />
    <Chicago />
    <Footer /> 
    </>
    
    
  )
}

export default HomePage
