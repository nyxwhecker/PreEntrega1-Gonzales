import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/home"> Home </Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/category/drinks"> Drinks </Link>
        <Link to="/category/food"> Food </Link>
        <Link to="/reservation"> Reservation</Link>
        <Link to="/about"> About us </Link>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
