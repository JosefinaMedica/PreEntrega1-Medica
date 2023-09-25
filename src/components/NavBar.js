import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-brand">La Provece</span>
        <ul className="navbar-nav">
          <li className="nav-item">Nosotros</li>
          <li className="nav-item">Productos</li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;