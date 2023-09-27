import CartWidget from './CartWidget';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
    <div>
      <span className="navbar-brand">La Provece</span>
      <ul>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </nav>
);
};

export default NavBar;



