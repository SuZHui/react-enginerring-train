import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  const defaultClass = 'fw6 no-underline near-black ph2 dim'
  return (
    <nav className="pa3">
      <NavLink to="/" className={({ isActive }) => isActive ? `${defaultClass} dark-red` : defaultClass }>Popular</NavLink>
      <NavLink to="/battle" className={({ isActive }) => isActive ? `${defaultClass} dark-red` : defaultClass }>Battle</NavLink>
    </nav>
  )
}
