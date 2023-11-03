import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="bg-light">
      <div className="d-flex justify-content-between align-items-center p-3">
        <Link to="/" className="navbar-brand">
        <h1 className="h5 custom-heading">La Provence</h1>
        </Link>

        <nav>
          <ul className="nav">
            <li className="nav-item mx-2">
              <NavLink to="/categoria/1" className="nav-link text-dark">
                Tradicional
              </NavLink>
            </li>

            <li className="nav-item mx-2"> 
              <NavLink to="/categoria/2" className="nav-link text-dark">
                Rústico
              </NavLink>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
