import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/xmark-solid.svg';
import { NavLink } from 'react-router-dom';

export function styleByActiveStatus(isActive) {
  return isActive
    ? { fontWeight: "bold", textDecoration: "none" }
    : { fontWeight: "normal", textDecoration: "none" };
}

export default function Header() {

    return (
        <header>
          <div className="logo">
            <h1><NavLink to="/products">Fake Store</NavLink></h1>
          </div>
          <ul>
            <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Home</NavLink></li>
            <li><NavLink to="/products" style={({ isActive }) => styleByActiveStatus(isActive)}>Products</NavLink></li>
            <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Contact</NavLink></li>
            <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>About</NavLink></li>
            <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Login/Register</NavLink></li>
            <li>
              <img src={Close} alt="" width="30" className="menu"/>
            </li>
          </ul>
          <div className="menu">
            <img src={Menu} alt="" width="30"/>
          </div>
        </header>
    )
}