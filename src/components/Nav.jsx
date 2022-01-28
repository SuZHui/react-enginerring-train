import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const defaultClass = "fw6 no-underline near-black ph2 dim f4";
  return (
    <nav
      className="pa3 fixed top-0 left-0 right-0 w-100 bg-white"
      style={{ zIndex: 100 }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${defaultClass} dark-red` : defaultClass
        }
      >
        Popular
      </NavLink>
      <NavLink
        to="/battle"
        className={({ isActive }) =>
          isActive ? `${defaultClass} dark-red` : defaultClass
        }
      >
        Battle
      </NavLink>
    </nav>
  );
}
