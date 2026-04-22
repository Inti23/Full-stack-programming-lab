import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Nexora.</Link>
      <ul className="nav-links">
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
        <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
        <li><Link to="/products" className={isActive('/products')}>Products</Link></li>
      </ul>
      {cartCount > 0 && (
        <div className="cart-badge" key={cartCount}>
          🛒 {cartCount} {cartCount === 1 ? 'item' : 'items'}
        </div>
      )}
    </nav>
  );
}

export default Navbar;