import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
    <ul>
      <li> <NavLink exact activeClassName="current" to='/Home'> HOME </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink></li>
    </ul>
  </nav>
  )
}
