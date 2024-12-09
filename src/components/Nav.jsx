import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar' >
        <div className='nav-container'>
          <img src='Logo.svg' />
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='#'>Menu</Link>
        </li>
        <li>
          <Link to='/booking'>Reservations</Link>
        </li>
        <li>
          <Link to='#'>Order Online</Link>
        </li>
        <li>
          <Link to='#'>Login</Link>
        </li>
       
    
      </ul>
      </div>
      </nav>
      )
}

export default Nav