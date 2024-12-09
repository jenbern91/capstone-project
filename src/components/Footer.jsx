import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='white-logo'>
      <img src='logo-white.png' />
    </div>
     <div className='site-map'>
     <h4>Sitemap</h4>
     <ul>
        <li><a>Home</a></li>
        <li><a>Menu</a></li>
        <li><a>Reservations</a></li>
        <li><a>Order Online</a></li>
        <li><a>Login</a></li>
      </ul>
  
      </div>
  
  
      <div className='contact-us'>
      <h4>Contact Us</h4>
      <p> 123 Fake Ave, Chicago, IL 60602</p>
      <p> +1 (012) 345-6789</p>
      <p> info@littlelemon.com</p>
      </div>
  
      <div className='connect-with-us'>
      <h4>Connect with us</h4>
        <span><FaFacebook /></span>
        <span><FaTiktok /></span>
        <span><FaInstagram /></span>
      </div>
      </div>
  )
}

export default Footer