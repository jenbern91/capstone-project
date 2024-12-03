import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar' >
      <div className='container'>
    <img src='logo.svg'></img>
    <ul>
      <li><a>Home</a></li>
      <li><a>Menu</a></li>
      <li><a>Reservations</a></li>
      <li><a>Order Online</a></li>
      <li><a>Login</a></li>
      <i className='fa-soli fa-user'></i>
    </ul>
    </div>
    </nav>
  )
}

export default Nav