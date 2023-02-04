
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/header.css';

function NavBar () {
  return (
    <div className="nav-bar-cta">

    <Link className='nav-bar-link' to="/">Home</Link>
    <Link className='nav-bar-link' to="/studio">Studio</Link>
    <Link className='nav-bar-link' to="/bio">Bio</Link>
    <Link className='nav-bar-link' to="/shop">Shop</Link>
    
    </div>
  );
}

export default NavBar;
