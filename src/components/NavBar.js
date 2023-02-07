
import { Link } from 'react-router-dom';
import '../assets/css/header.css';

function NavBar () {
  return (
    <div className="nav-bar-cta">

    <Link className='nav-bar-link home' to="/">Home</Link>
    <Link className='nav-bar-link studio' to="/studio">Studio</Link>
    <Link className='nav-bar-link bio' to="/bio">Bio</Link>
    <Link className='nav-bar-link shop' to="/shop">Shop</Link>
    <Link className='nav-bar-link book' to="/book">Contact</Link>
    
    </div>
  );
}

export default NavBar;
