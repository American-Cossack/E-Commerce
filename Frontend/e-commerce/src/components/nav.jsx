import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
const Nav = () => {
  
    return (
      <nav className="navbar">
        <h4>Navigation</h4>
        <div>
          <Link to="/home"> Home </Link>
          <Link to="/items"> Listings</Link>
          <Link to="/cart"> Cart</Link>
          <Link to="/checkout"> Checkout</Link>
        </div>
      </nav>
    )
  }
  
  export default Nav
  