import React from 'react'
import {Link } from "react-router-dom";
import showcaseImage from '../assets/restaurant.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="box-1">
            <h1>Little Lemon</h1>
            <h3 className='location'>Chicago</h3>
            <p className='description'>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking"><button className='reserve-button'>Reserve a Table</button></Link>

      </div>
      <div className="box-2">    
           <img className='showcase-image' src={showcaseImage}/>
      </div>
      
    </div>
  )
}

export default Hero