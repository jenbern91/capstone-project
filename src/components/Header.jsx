import React from 'react'
import showcaseImage from './assets/restaurant.png'


const Header = () => {
  return (
    <header className='little-lemon-showcase'>
      <div className='container'>
        <div className='grid'>
            <div className='grid-item-1'>
                <h1>Little Lemon</h1>
                <h3 className='location'>Chicago</h3>
                <p className='description'>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='reserve-button'>Reserve a Table</button>
            </div>
        <div className='grid-item-2'>
             <img className='showcase-image' src={showcaseImage}></img>
        </div>
      

        </div>
      </div>
    </header>
  )
}

export default Header