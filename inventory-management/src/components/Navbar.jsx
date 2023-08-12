import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/products">Products</NavLink>
    </div>
  )
}
