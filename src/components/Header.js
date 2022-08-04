import React, { useState, useContext } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/xmark-solid.svg';
import Cart from './svg/cart-shopping-solid.svg';
import { NavLink, Link } from 'react-router-dom';
import { DataContext } from './DataProvider';

export function styleByActiveStatus(isActive) {
  return isActive
    ? { fontWeight: "bold", textDecoration: "none" }
    : { fontWeight: "normal", textDecoration: "none" };
}

export default function Header() {

  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  const styleMenu = {
    left: menu ? 0 : "-100%"
  }

  return (
      <header>
        <div className="menu" onClick={toggleMenu}>
          <img src={Menu} alt="" width="30"/>
        </div>

        <div className="logo">
          <h1><NavLink to="/products">Fake Store</NavLink></h1>
        </div>
        <ul style={styleMenu}>
          <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Home</NavLink></li>
          <li><NavLink to="/products" style={({ isActive }) => styleByActiveStatus(isActive)}>Products</NavLink></li>
          <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Contact</NavLink></li>
          <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>About</NavLink></li>
          <li><NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>Login/Register</NavLink></li>
          <li onClick={toggleMenu}>
            <img src={Close} alt="" width="30" className="menu"/>
          </li>
        </ul>
        
        <div className='cart-icon'>
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      </header>
  )
}