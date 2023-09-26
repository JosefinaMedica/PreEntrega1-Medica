import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>
        <span className="navbar-brand">La Provece</span>
        <ul>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;